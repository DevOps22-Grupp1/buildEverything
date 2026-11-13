// The demo accounts from init/03-init-users.js have their passwords in this public repo, and
// four of them were admins. They lose the password, so they can no longer log in
// (user-management-service refuses an account without one), and every one is a customer: admin
// is the magic-link login now. Safe to run again.
db = db.getSiblingDB('allUsers');
const demo = ["emclinden0", "tjewar1", "sgwyneth5", "akamen2", "cmor3", "rporker4", "admin", "user1"];
const r = db.users.updateMany(
    { username: { $in: demo } },
    { $unset: { password: "" }, $set: { role: "customer" } }
);
print(`demo accounts: matched ${r.matchedCount} of ${demo.length}, changed ${r.modifiedCount}`);
