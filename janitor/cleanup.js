// The nightly clean-up of the public demo, run by the janitor service in docker-compose.prod.yml
// (and once by the smoke test). Anyone may sign up and shop, so the data would only grow:
// - customer accounts older than RETENTION_DAYS are deleted, with their carts and orders;
//   never the shared demo account (DEMO_USERNAME)
// - orders older than RETENTION_DAYS are deleted, whoever made them
// - the demo account's cart is emptied
// Safe to run again. order-processing-service keeps orders and carts in allProducts.
const days = Number(process.env.RETENTION_DAYS || 30);
const demo = process.env.DEMO_USERNAME || "demo";
const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
// Orders store their time as text, "2026-11-13 12:00:00.123456": the date part compares as text
const cutoffDay = cutoff.toISOString().slice(0, 10);

const users = db.getSiblingDB("allUsers").users;
const shop = db.getSiblingDB("allProducts");

const oldIds = users
  .find({ role: "customer", username: { $ne: demo }, created: { $lt: cutoff } }, { id: 1 })
  .toArray()
  .map((u) => u.id);
const accounts = users.deleteMany({ id: { $in: oldIds } }).deletedCount;
const theirCarts = shop.cart.deleteMany({ userid: { $in: oldIds } }).deletedCount;
const theirOrders = shop.orders.deleteMany({ userid: { $in: oldIds } }).deletedCount;
const oldOrders = shop.orders.deleteMany({ time: { $type: "string", $lt: cutoffDay } }).deletedCount;

const demoUser = users.findOne({ username: demo });
const demoCart = demoUser ? shop.cart.deleteMany({ userid: demoUser.id }).deletedCount : 0;

print(
  `janitor ${new Date().toISOString()}: kept ${days} days; deleted ${accounts} accounts ` +
    `(${theirCarts} cart rows, ${theirOrders} orders), ${oldOrders} older orders, ` +
    `${demoCart} rows in the demo cart`
);
