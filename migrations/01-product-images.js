// The original image links for these products are dead (the shops removed them; Elgiganten
// then serves a TV picture for every product). Replaced by freely licensed images from
// Wikimedia Commons, see IMAGE-CREDITS.md. Safe to run again: it only sets the image.
db = db.getSiblingDB('allProducts');
const images = [
    ["Kitchen Aid 4,8L - ARTISAN - RED", "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Red_KitchenAid_Artisan.jpg/960px-Red_KitchenAid_Artisan.jpg"],
    ["NOD Icecream machine 1,5 liter, BLACK", "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/ICE_CREAM_MACHINE_S850C.jpg/960px-ICE_CREAM_MACHINE_S850C.jpg"],
    ["Sage Belgian Waffeiron - The Smart Waffle", "https://upload.wikimedia.org/wikipedia/commons/2/26/Waffle_iron.JPG"],
    ["Samsung Galaxy S10", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/SAMSUNG_Galaxy_S10_5G.jpg/960px-SAMSUNG_Galaxy_S10_5G.jpg"],
    ["Air Jordan 1 Retro High OG", "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/1985_Air_Jordan_1s.jpg/960px-1985_Air_Jordan_1s.jpg"],
    ["Skyrunner Kangaroo shoes", "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Powerbocking_jumper_06.JPG/960px-Powerbocking_jumper_06.JPG"],
    ["Acer Iconia Tab P10 (64GB) ", "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Acer_Iconia_One_8.png/960px-Acer_Iconia_One_8.png"],
    ["LG C2 65 OLED", "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/LG_OLED_TV.jpg/960px-LG_OLED_TV.jpg"],
    ["Samsung QN90A Neo QLED", "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Samsung_QLED_TV_8K_-_75_inches_-_2018-11-02.jpg/960px-Samsung_QLED_TV_8K_-_75_inches_-_2018-11-02.jpg"],
    ["Sony XBR-65A9G", "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Televisor_Sony_Bravia_2008.jpg/960px-Televisor_Sony_Bravia_2008.jpg"],
    ["TCL 75' 75C849 Mini LED 4K Google TV", "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/TCL_H9700_55%E2%80%9D_Quantum_Dot_TV_with_Color_IQ_%2816675928890%29.jpg/960px-TCL_H9700_55%E2%80%9D_Quantum_Dot_TV_with_Color_IQ_%2816675928890%29.jpg"],
    ["Acer Predator Orion 3000", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Acer_Predator_G6-710.jpg/960px-Acer_Predator_G6-710.jpg"],
    ["Apple iMac 27' M1 8GB/256GB", "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/M1_iMac_blue_model.jpg/960px-M1_iMac_blue_model.jpg"],
    ["HP Pavilion 15-eg0009no 15.6' bärbar dator", "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/HP_Pavilion_dv2000_laptop.jpg/960px-HP_Pavilion_dv2000_laptop.jpg"],
    ["Lenovo Legion 5 15IMH05H 15.6' bärbar dator", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Lenovo_Legion_Y520_%281%29.jpg/960px-Lenovo_Legion_Y520_%281%29.jpg"],
    ["Acer Predator Triton 500", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Acer_Predator_laptops_and_mice%2C_Computex_Taipei_%2827373087145%29.jpg/960px-Acer_Predator_laptops_and_mice%2C_Computex_Taipei_%2827373087145%29.jpg"],
    ["Apple Watch Series 7 41mm", "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Apple_Watch_Series_7%3B_January_2022_%2802%29.jpg/960px-Apple_Watch_Series_7%3B_January_2022_%2802%29.jpg"],
    ["Fitbit Versa 3", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Fitbit_Versa_Lite_No_-_12.jpg/960px-Fitbit_Versa_Lite_No_-_12.jpg"],
    ["Garmin Venu 2S", "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Garmin_Venu_3_%28a%29.JPG/960px-Garmin_Venu_3_%28a%29.JPG"],
    ["Samsung Galaxy Watch4 Classic", "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/SAMSUNG_Galaxy_Watch_%285%29.jpg/960px-SAMSUNG_Galaxy_Watch_%285%29.jpg"],
    ["Samsung Galaxy Watch4", "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Samsung_Galaxy_Watch_4.jpg/960px-Samsung_Galaxy_Watch_4.jpg"],
    ["Apple iPhone 13 Pro 128GB", "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Back_of_the_iPhone_13_Pro.jpg/960px-Back_of_the_iPhone_13_Pro.jpg"],
    ["Crecent 24' 7-växlad", "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Hybrid-bicycle-1.jpg/960px-Hybrid-bicycle-1.jpg"],
];
let matched = 0;
let changed = 0;
for (const [name, image] of images) {
    const r = db.products.updateOne({ order: name }, { $set: { image: image } });
    matched += r.matchedCount;
    changed += r.modifiedCount;
}
// The smoke test checks this line: every product must be found
print(`product images: matched ${matched} of ${images.length}, changed ${changed}`);
