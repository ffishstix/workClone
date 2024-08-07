const defaultOptions = [
  { "itemName": "Beer", "Order": 0, "onclick": "create(this)" },
  { "itemName": "Soft Drink", "Order": 1, "onclick": "create(this)" },
  { "itemName": "Spirits", "Order": 2, "onclick": "create(this)" },
  { "itemName": "Wine", "Order": 3, "onclick": "create(this)" },
  { "itemName": "Breakfast", "Order": 4, "onclick": "create(this)" },
  { "itemName": "Bar Snacks + Sundry", "Order": 5, "onclick": "create(this)" },
  { "itemName": "Hot Bev", "Order": 6, "onclick": "create(this)" },
  { "itemName": "Cocktail", "Order": 7, "onclick": "create(this)" },
  { "itemName": "Tobacco", "Order": 8, "onclick": "create(this)" },
  { "itemName": "Starters", "Order": 9, "onclick": "create(this)" },
  { "itemName": "Mains", "Order": 10, "onclick": "create(this)" },
  { "itemName": "Roasts", "Order": 11, "onclick": "create(this)" },
  { "itemName": "Specials", "Order": 12, "onclick": "create(this)" },
  { "itemName": "Lunch", "Order": 13, "onclick": "create(this)" },
  { "itemName": "Kids", "Order": 14, "onclick": "create(this)" },
  { "itemName": "Sunday Eve", "Order": 15, "onclick": "create(this)" },
  { "itemName": "Desserts", "Order": 16, "onclick": "create(this)" },
  { "itemName": "Tuesday Chippy Tea", "Order": 17, "onclick": "create(this)" }
];const beerOptions = [
    { "itemName": "Bar Misc", "Order": 0, "Price": 0 },
    { "itemName": "Food Misc", "Order": 1, "Price": 0},
    { "itemName": "AMSTEL", "Order": 2, "Price": 520 },
    { "itemName": "KOREV", "Order": 3, "Price": 560 },
    { "itemName": "BIRRA MORETTI", "Order": 4, "Price": 600 },
    { "itemName": "TARKA FOUR", "Order": 5, "Price": 490 },
    { "itemName": "TRIBUTE", "Order": 6, "Price": 490 },
    { "itemName": "LEGEND", "Order": 7, "Price": 490 },
    { "itemName": "OTTER ALE", "Order": 8, "Price": 490 },
    { "itemName": "Hawkstone Premium Lager", "Order": 9, "Price": 500 },
    { "itemName": "INCHES' MEDIUM APPLE", "Order": 10, "Price": 510 },
    { "itemName": "THACHERS GOLD", "Order": 11, "Price": 510 },
    { "itemName": "GUINNESS", "Order": 12, "Price": 540 },
    { "itemName": "NEWCASTLE BROWN", "Order": 13, "Price": 520 },
    { "itemName": "Peroni", "Order": 14, "Price": 350 },
    { "itemName": "Desperados", "Order": 15, "Price": 430 },
    { "itemName": "Corona", "Order": 16, "Price": 350 },
    { "itemName": "DRINK IN", "Order": 17, "Price": null },
    { "itemName": "Thachers Haze Bottle", "Order": 18, "Price": 480 },
    { "itemName": "Thatchers Rascal", "Order": 19, "Price": 520 },
    { "itemName": "Thatchers Apple & B/C", "Order": 20, "Price": 520 },
    { "itemName": "Thatchers Blood Orange", "Order": 21, "Price": 520 },
    { "itemName": "Old Mout Berries + Cherries", "Order": 22, "Price": 520 },
    { "itemName": "Old Mout Strawb + Apple", "Order": 23, "Price": 520 },
    { "itemName": "Crabbies Raspberry", "Order": 24 , "Price": 520 },
    { "itemName": "Crabbies", "Order": 25 , "Price": 500},
    { "itemName": "Alcohol free", "Order": 26, "Price": null },
    { "itemName": "Sandford Devon rose", "Order": 27, "Price": 520},
    { "itemName": "Sandford Devon Red", "Order": 28, "Price": 500},
    { "itemName": "Sandford Devon Mist", "Order": 29, "Price": 500},
    { "itemName": "With Ice", "Order": 30, "Price": null},
    { "itemName": "Coke", "Order": 31 , "Price": null},
    { "itemName": "Pepsi", "Order": 32, "Price": null},
    { "itemName": "Lemonade", "Order": 33, "Price": null},
    { "itemName": "Soda Water", "Order": 34, "Price": null},
    { "itemName": "Cordial", "Order": 35, "Price": null}
];const softOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": 0},
  {"itemName": "Food Misc", "Order": 1, "Price": 0},
  { "itemName": "Cordial" , "Order": 2 , "Price": null},
  { "itemName": "Fruit juice", "Order": 3, "Price": null},
  { "itemName": "J20", "Order": 4, "Price": null},
  { "itemName": "Fruit shoot", "Order": 5, "Price": null},
  { "itemName": "Luscombe", "Order": 6, "Price": null },
  { "itemName": "Appletizer", "Order": 7, "Price": 350 },
  { "itemName": "Water", "Order": 8, "Price": 0 },
  { "itemName": "Tonic & mixers", "Order": 9, "Price": null },
  { "itemName": "Glass of milk pint", "Order": 10, "Price": 300 },
  { "itemName": "Jug of water", "Order": 11, "Price": null },
  { "itemName": "Pepsi can", "Order": 12, "Price": 150 },
  { "itemName": "Red bull", "Order": 13, "Price": 350 },
  { "itemName": "Glass water", "Order": 14, "Price": 0 },
  { "itemName": "Oj+lemonade pint", "Order": 15, "Price": 350 },
  { "itemName": "Ice", "Order": 16, "Price": null },
  { "itemName": "Slice", "Order": 17, "Price": null },
  { "itemName": "Lime and soda pint", "Order": 18, "Price": 250 },
  { "itemName": "Lemonade+", "Order": 19, "Price": null },
  { "itemName": "Soda+", "Order": 20, "Price": null },
  { "itemName": "Soda", "Order": 21, "Price": null },
  { "itemName": "Coke", "Order": 22, "Price": null },
  { "itemName": "Pepsi", "Order": 23, "Price": null },
  { "itemName": "Lemonade", "Order": 24, "Price": null }

];const spirOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": 0},
  {"itemName": "Food Misc", "Order": 1, "Price": 0},
  {"itemName": "Famous grouse", "Order": 2, "Price": 330},
  {"itemName": "Jack Daniels", "Order": 3, "Price": 370},
  {"itemName": "Gin", "Order": 4, "Price": null},
  {"itemName": "Rum", "Order": 5, "Price": null},
  {"itemName": "Cap spiced", "Order": 6, "Price": 330},
  {"itemName": "Brandy", "Order": 7, "Price": null},
  {"itemName": "Vodka", "Order": 8, "Price": null},
  {"itemName": "Kraken spiced", "Order": 9, "Price": 370},
  {"itemName": "Whisky", "Order": 10, "Price": null},
  {"itemName": "Port", "Order": 11, "Price": null},
  {"itemName": "Bacardi", "Order": 12, "Price": 300},
  {"itemName": "Liqueurs", "Order": 13, "Price": null},
  {"itemName": "Sherry", "Order": 14, "Price": null},
  {"itemName": "Malibu", "Order": 15, "Price": 260},
  {"itemName": "Vermouth", "Order": 16, "Price": null},
  {"itemName": "With ice", "Order": 17, "Price": null},
  {"itemName": "Southern comfort", "Order": 18, "Price": 320},
  {"itemName": "Als gin not available", "Order": 19, "Price": null},
  {"itemName": "Slice", "Order": 21, "Price": null},
  {"itemName": "Disaronno", "Order": 22, "Price": 300},
  {"itemName": "Pimms", "Order": 23, "Price": 400},
  {"itemName": "Pimms jug", "Order": 24, "Price": 1500},
  {"itemName": "Coke small dash", "Order": 25, "Price": 100},
  {"itemName": "Lemonade small dash", "Order": 26, "Price": 100},
  {"itemName": "Soda small dash", "Order": 27, "Price": 50},
  {"itemName": "Alcohol free", "Order": 28, "Price": null},
  {"itemName": "Tonic & mixers", "Order": 29, "Price": null}
];const wineOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": 0},
  {"itemName": "Food Misc", "Order": 1, "Price": 0},
  {"itemName": "House sauce blanc chilli", "Order": 2, "Price": null},
  {"itemName": "Sauv blanc (NZ)", "Order": 3, "Price": null},
  {"itemName": "Pino grigio", "Order": 4, "Price": null},
  {"itemName": "Chardonnay", "Order": 5, "Price": null},
  {"itemName": "Blanco rioja (bottle)", "Order": 6, "Price": 2600},
  {"itemName": "Picpoul de pinet (bottle)", "Order": 7, "Price": 2700},
  {"itemName": "House merlot", "Order": 8, "Price": null},
  {"itemName": "Shiraz", "Order": 9, "Price": null},
  {"itemName": "Malbec", "Order": 10, "Price": null},
  {"itemName": "Pino noir (bottle)", "Order": 11, "Price": 2800},
  {"itemName": "El mason rioja (bottle)", "Order": 12, "Price": 3200},
  {"itemName": "Appassimento rosso", "Order": 13, "Price": 2600},
  {"itemName": "Mcguigan 0 sauv blanc Bt", "Order": 14, "Price": 1200},
  {"itemName": "Garnacha rose (dry)", "Order": 15, "Price": null},
  {"itemName": "Zinfandel rose (sweet)", "Order": 16, "Price": null},
  {"itemName": "Chateau routes rose (bottle)", "Order": 17, "Price": 2800},
  {"itemName": "Mr goose rose (bottle)", "Order": 18, "Price": 2500},
  {"itemName": "Landon champagne", "Order": 19, "Price": 5900},
  {"itemName": "Cremant delimoux", "Order": 20, "Price": 3500},
  {"itemName": "Nozeco 75cl", "Order": 21, "Price": 1200},
  {"itemName": "Nozeco rose 75cl", "Order": 22, "Price": 1500},
  {"itemName": "Prosecco rose mini", "Order": 23, "Price": 875},
  {"itemName": "Prosecco glass 175ml", "Order": 24, "Price": 670},
  {"itemName": "Prosecco rose large 75cl", "Order": 25, "Price": 2600},
  {"itemName": "Prosecco large 75cl", "Order": 26, "Price": 2600},
  {"itemName": "Lemonade small dash", "Order": 27, "Price": 100},
  {"itemName": "Lemonade large dash", "Order": 28, "Price": 130},
  {"itemName": "Soda small dash", "Order": 29, "Price": 50},
  {"itemName": "Soda large dash", "Order": 30, "Price": 80}
];const breaOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": 0},
  {"itemName": "Food Misc", "Order": 1, "Price": 0},
  {"itemName": "3-item", "Order": 2, "Price": null},
  {"itemName": "4-item", "Order": 3, "Price": null},
  {"itemName": "5-item", "Order": 4, "Price": null},
  {"itemName": "6-item", "Order": 5, "Price": null},
  {"itemName": "7-item", "Order": 6, "Price": null},
  {"itemName": "8-item", "Order": 7, "Price": null},
  {"itemName": "9-item", "Order": 8, "Price": null},
  {"itemName": "10-item", "Order": 9, "Price": null},
  {"itemName": "11-item", "Order": 10, "Price": null},
  {"itemName": "12-item", "Order": 11, "Price": null},
  {"itemName": "13-item", "Order": 12, "Price": null},
  {"itemName": "14-item", "Order": 13, "Price": null},
  {"itemName": "Breakfast Bap ", "Order": 14, "Price": 500},
  {"itemName": "Breakfast Swadnwich", "Order": 15, "Price": 500},
  {"itemName": "Breakfast Extra", "Order": 16, "Price": 100},
  {"itemName": "3 pancakes bacon/mapel", "Order": 17, "Price": 550},
  {"itemName": "Bacon", "Order": 18, "Price": null},
  {"itemName": "Sausage", "Order": 19, "Price": null},
  {"itemName": "Beans", "Order": 20, "Price": null},
  {"itemName": "Mushrooms", "Order": 21, "Price": null},
  {"itemName": "Tomatoes", "Order": 22, "Price": null},
  {"itemName": "Veggie sausage", "Order": 23, "Price": null},
  {"itemName": "Fried egg", "Order": 24, "Price": null},
  {"itemName": "Scrambled egg (2 eggs)", "Order": 25, "Price": null},
  {"itemName": "Black pudding", "Order": 26, "Price": null},
  {"itemName": "Hogs pudding", "Order": 28, "Price": null},
  {"itemName": "Hash brown", "Order": 29, "Price": null},
  {"itemName": "Saute potatoes", "Order": 30, "Price": null},
  {"itemName": "Fried bread", "Order": 31, "Price": null},
  {"itemName": "White toast X1", "Order": 32, "Price": null},
  {"itemName": "Granary X1", "Order": 33, "Price": null},
  {"itemName": "To be cont", "Order": 0, "Price": null},
  {"itemName": "End of order", "Order": 0, "Price": null}
];const barOptions  = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Salted nuts", "Order": 2, "Price": 150},
  {"itemName": "Dry roasted nuts", "Order": 3, "Price": 150},
  {"itemName": "Port scratchings", "Order": 4, "Price": 130},
  {"itemName": "Mini cheddars", "Order": 5, "Price": 150},
  {"itemName": "Chorizo crisps", "Order": 6, "Price": 150},
  {"itemName": "Salted crisps", "Order": 7, "Price": 150},
  {"itemName": "Salt and vinegarr crisps", "Order": 8, "Price": 150},
  {"itemName": "Cheese and onion crisps", "Order": 9, "Price": 150},
  {"itemName": "Bacon fries", "Order": 10, "Price": 130},
  {"itemName": "Beef crisps", "Order": 11, "Price": 150}
  
];const hotOptions  = [
  {"itemName": "Bar Misc", "Order": 0, "Price": 0},
  {"itemName": "Food Misc", "Order": 1, "Price": 0},
  {"itemName": "Floater coffee", "Order": 12, "Price": 330},
  {"itemName": "Hot choc", "Order": 12, "Price": 350},
  {"itemName": "Chai latte", "Order": 12, "Price": 350},
  {"itemName": "Clay hot choc", "Order": 12, "Price": 400},
  {"itemName": "Flat white", "Order": 12, "Price": 350},
  {"itemName": "Oat milk", "Order": 12, "Price": 50},
  {"itemName": "Lattee", "Order": 12, "Price": 350},
  {"itemName": "Soya milk", "Order": 12, "Price": 50},
  {"itemName": "Espresso", "Order": 12, "Price": 250},
  {"itemName": "Vanilla", "Order": 12, "Price": 50},
  {"itemName": "Caramel", "Order": 12, "Price": 50},
  {"itemName": "Americano", "Order": 12, "Price": 300},
  {"itemName": "Speciality tea", "Order": 12, "Price": 350},
  {"itemName": "Capachino", "Order": 12, "Price": 350},
  {"itemName": "Decaff", "Order": 12, "Price": 0},
  {"itemName": "Mocha", "Order": 12, "Price": null},
  {"itemName": "Separate milk", "Order": 12, "Price": null},
  {"itemName": "Irish coffee", "Order": 12, "Price": null}
  
];const cockOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Bramble", "Order": 2, "Price": 695},
  {"itemName": "Passion fruit martini", "Order": 3, "Price": 695},
  {"itemName": "Devon stormy", "Order": 4, "Price": 695},
  {"itemName": "Espresso martini", "Order": 5, "Price": 695},
  {"itemName": "Seabird", "Order": 6, "Price": 695},
  {"itemName": "Strawberry daiquiri", "Order": 7, "Price": 695},
  {"itemName": "Aperol spritz", "Order": 8, "Price": 695},
  {"itemName": "Cosmopolitan", "Order": 9, "Price": 695},
  {"itemName": "Rhubarb + ginger fizz", "Order": 10, "Price": 750},
  {"itemName": "Raspberry fizz", "Order": 11, "Price": 750},
  {"itemName": "Plum + vanilla fizz", "Order": 12, "Price": 750},
  {"itemName": "Snow ball", "Order": 13, "Price": 450},
  {"itemName": "Shot of prosecco", "Order": 14, "Price": 100}
    
];const tobaOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "B&H sky blue s/k", "Order": 2, "Price": 1300},
  {"itemName": "Cig papers", "Order": 3, "Price": 35},
  {"itemName": "L&B blue k/s", "Order": 4, "Price": 1300},
  {"itemName": "Lighter", "Order": 5, "Price": 150},
  {"itemName": "Embassy sig gold", "Order": 6, "Price": 1275},
  {"itemName": "Filters", "Order": 7, "Price": 120},
  {"itemName": "Cutters choice", "Order": 8, "Price": 2100},
  {"itemName": "Golden Virginia", "Order": 9, "Price": 2300},
  {"itemName": "Henri winter mans", "Order": 10, "Price": 1300},
  {"itemName": "Hamlet", "Order": 11, "Price": 750},
  {"itemName": "Vape", "Order": 12, "Price": 600}  
];const starOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "**training**", "Order": 2, "Price": null},
  {"itemName": "**starters**", "Order": 3, "Price": null},
  {"itemName": "Nachos", "Order": 4, "Price": 795},
  {"itemName": "Chilly chicken starter", "Order": 5, "Price": 795},
  {"itemName": "Halloumi fries", "Order": 6, "Price": 795},
  {"itemName": "Salt 'n' pepper squid", "Order": 7, "Price": 795},
  {"itemName": "Spicy sweetcorn fritters", "Order": 8, "Price": 795},
  {"itemName": "Camembert", "Order": 9, "Price": 895},
  {"itemName": "Chicken  goujons", "Order": 0, "Price": 795},
  {"itemName": "With jalapenos", "Order": 0, "Price": 75},
  {"itemName": "Steve wings", "Order": 12, "Price": 675},
  {"itemName": "Allergy", "Order": 13, "Price": null},
  {"itemName": "Sides", "Order": 14, "Price": null},
  {"itemName": "No", "Order": 15, "Price": null},
  ,
];const mainOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Classic beefburger", "Order": 2, "Price": 13.95},
  {"itemName": "Classic beefburger", "Order": 3, "Price": 13.95},
  {"itemName": "Rump steak", "Order": 4, "Price": 21.95},
  {"itemName": "Ham, egg and chips", "Order": 5, "Price": 14.50},
  {"itemName": "Clukin bull", "Order": 6, "Price": 1750},
  {"itemName": "Scampi large", "Order": 7, "Price": 1495},
  {"itemName": "Small ham egg chips", "Order": 8, "Price": 1050},
  {"itemName": "Chicken burger", "Order": 9, "Price": 1395},
  {"itemName": "Scampi small", "Order": 10, "Price": 1095},
  {"itemName": "Sweet and sour chicken", "Order": 11, "Price": 1595},
  {"itemName": "Garden burger", "Order": 12, "Price": 1395},
  {"itemName": "Fish and chips", "Order": 13, "Price": 1695},
  {"itemName": "Food long chili dog", "Order": 14, "Price": 1695},
  {"itemName": "Sm seanbass fishcake", "Order": 15, "Price": 11.95},
  {"itemName": "Chicken tikka masala", "Order": 16, "Price": 1495},
  {"itemName": "Hunter chicken", "Order": 17, "Price": 1695},
  {"itemName": "Lge sea bass fishcakes", "Order": 18, "Price": 1595},
  {"itemName": "Keralan cauli curry", "Order": 19, "Price": 1395},
  {"itemName": "Lg gammon steak", "Order": 20, "Price": 1895},
  {"itemName": "Beef chilli (gf)", "Order": 21, "Price": 1450},
  {"itemName": "Crispy chilly chicken", "Order": 22, "Price": 1595},
  {"itemName": "Sm gammon steak", "Order": 23, "Price": 1295},
  {"itemName": "Three bean chilli", "Order": 24, "Price": 1450},
  {"itemName": "Allergy", "Order": 25, "Price": null},
  {"itemName": "End of order", "Order": 26, "Price": null},
  {"itemName": "To be cont", "Order": 27, "Price": null},
  {"itemName": "Sides", "Order": 28, "Price": null}
];const roasOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Roast small pork", "Order": 2, "Price": 1095},
  {"itemName": "Roast small chicken", "Order": 3, "Price": 1095},
  {"itemName": "Roast small beef", "Order": 4, "Price": 1095},
  {"itemName": "Roast small gammon", "Order": 5, "Price": 1095},
  {"itemName": "Roast standard", "Order": 6, "Price": 1495},
  {"itemName": "Roast pork bap", "Order": 7, "Price": 1095},
  {"itemName": "Beef bap", "Order": 8, "Price": 1095},
  {"itemName": "Chicken bap", "Order": 9, "Price": 1095},
  {"itemName": "Gammon bap", "Order": 10, "Price": 1095},
  {"itemName": "Stuffing", "Order": 11, "Price": 50},
  {"itemName": "Large fodder bowl", "Order": 12, "Price": null},
  {"itemName": "Cauli cheese bowl", "Order": 13, "Price": 350},
  {"itemName": "Roast gurt", "Order": 14, "Price": 1695},
  {"itemName": "Fodder bowl small", "Order": 15, "Price": null},
  {"itemName": "pigs in blankets", "Order": 16, "Price": 450},
  {"itemName": "Roast small no meat", "Order": 17, "Price": 995},
  {"itemName": "Dairy free", "Order": 18, "Price": null},
  {"itemName": "Veg wellington", "Order": 19, "Price": 1495},
  {"itemName": "Roast potatoes", "Order": 20, "Price": 350},
  {"itemName": "Roast std no meat", "Order": 21, "Price": 1395},
  {"itemName": "Gluten free", "Order": 22, "Price": null},
  {"itemName": "Nut roast large", "Order": 23, "Price": 1495},
  {"itemName": "York pudding", "Order": 24, "Price": 100},
  {"itemName": "Sides", "Order": 25, "Price": null},
  {"itemName": "Allergy ", "Order": 26, "Price": null},
  {"itemName": "No", "Order": 27, "Price": null}
  

];const specOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "L/fries clucknbull", "Order": 2, "Price": 1095},
  {"itemName": "Saucy click", "Order": 3, "Price": 1095},
  {"itemName": "Beef/bacon/ cheese salad", "Order": 4, "Price": 1395},
  {"itemName": "BBQ chicken salad", "Order": 5, "Price": 1395},
  {"itemName": "Ham and cheddar salad", "Order": 6, "Price": 1395},
  {"itemName": "Chicken caesar salad", "Order": 7, "Price": 1395},
  {"itemName": "Special 1", "Order": 8, "Price": null},
  {"itemName": "Pizza - chilli dog", "Order": 9, "Price": 1350},
  {"itemName": "Special 2", "Order": 10, "Price": null},
  {"itemName": "Pizza - saucy clicker", "Order": 11, "Price": 1250},
  {"itemName": "Special 3", "Order": 12, "Price": null},
  {"itemName": "Pizza - clucking bull", "Order": 13, "Price": 1395},
  {"itemName": "Special 4", "Order": 14, "Price": null},
  {"itemName": "Pizza - crispy quacker", "Order": 15, "Price": 1395},
  {"itemName": "Special 5", "Order": 16, "Price": null},
  {"itemName": "Veggie pizza", "Order": 17, "Price": 1095},
  {"itemName": "Allergy", "Order": 18, "Price": null},
  {"itemName": "Sides", "Order": 19, "Price": null},
  {"itemName": "No", "Order": 20, "Price": null}
  
  
];const luncOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Brunch small", "Order": 2, "Price": 1050},
  {"itemName": "Brunch large", "Order": 3, "Price": 1250},
  {"itemName": "Add cheese", "Order": 4, "Price": 100},
  {"itemName": "Homemade coleslaw", "Order": 5, "Price": 200},
  {"itemName": "Beef and bacon baguette", "Order": 6, "Price": 1295},
  {"itemName": "Plain jacket with butter", "Order": 7, "Price": 695},
  {"itemName": "Tuna mayo baguette", "Order": 8, "Price": 1095},
  {"itemName": "Chicken salad baguette", "Order": 9, "Price": 1095},
  {"itemName": "Beans jacket", "Order": 10, "Price": 795},
  {"itemName": "Cheese jacket", "Order": 11, "Price": 795},
  {"itemName": "Fish fingers baguette", "Order": 12, "Price": 1195},
  {"itemName": "Cheese and beans jacket", "Order": 13, "Price": 850},
  {"itemName": "Bacon and cheddar baguette", "Order": 14, "Price": 1095},
  {"itemName": "Tuna mayo jacket", "Order": 15, "Price": 850},
  {"itemName": "Ham and cheese baguette", "Order": 16, "Price": 995},
  {"itemName": "Beef chilli jacket", "Order": 17, "Price": 895},
  {"itemName": "Chicken goujons baguette", "Order": 18, "Price": 1195},
  {"itemName": "Smoky bean chilli jacket", "Order": 19, "Price": 895},
  {"itemName": "Cheddar + chutney baguette", "Order": 20, "Price": 995},
  {"itemName": "Allergy", "Order": 21, "Price": null},
  {"itemName": "Sides", "Order": 22, "Price": null},
  {"itemName": "No", "Order": 23, "Price": null}
  
];const kidsOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "With cheese", "Order": 2, "Price": 100},
  {"itemName": "Fish fingers and chips", "Order": 3, "Price": 695},
  {"itemName": "Chicken bites", "Order": 4, "Price": 695},
  {"itemName": "Courtney's cheese roll", "Order": 5, "Price": 450},
  {"itemName": "Mini naan pizza", "Order": 6, "Price": 795},
  {"itemName": "Child's sausages", "Order": 7, "Price": 795},
  {"itemName": "Mac n cheese kids", "Order": 8, "Price": 795},
  {"itemName": "Allergy", "Order": 9, "Price": null},
  {"itemName": "Sides", "Order": 10, "Price": null},
  {"itemName": "No", "Order": 11, "Price": null}
];const sundOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Camembert", "Order": 2, "Price": 895},
  {"itemName": "Halloumi fries", "Order": 3, "Price": 795},
  {"itemName": "Nachos", "Order": 4, "Price": 795},
  {"itemName": "Chicken goujons", "Order": 5, "Price": 795},
  {"itemName": "Salt n pepper squid", "Order": 6, "Price": 795},
  {"itemName": "Spicy sweetcorn fritters", "Order": 7, "Price": 795},
  {"itemName": "Hunters chicken", "Order": 8, "Price": 1695},
  {"itemName": "Rump steak", "Order": 9, "Price": 2195},
  {"itemName": "Scampi large", "Order": 10, "Price": 1495},
  {"itemName": "Scampi small", "Order": 11, "Price": 1095},
  {"itemName": "Foot long chilli", "Order": 12, "Price": null}, // come back when paul replys
  {"itemName": "Ham egg chips", "Order": 13, "Price": 1450},
  {"itemName": "Small", "Order": 14, "Price": 1050},
  {"itemName": "Lge sea bass", "Order": 15, "Price": 1595},
  {"itemName": "Sm", "Order": 16, "Price": 1195},
  {"itemName": "Classic beef", "Order": 17, "Price": 1395},
  {"itemName": "Chicken burger", "Order": 18, "Price": 1395},
  {"itemName": "Clukin", "Order": 19, "Price": 1750},
  {"itemName": "Garden burger", "Order": 20, "Price": 1395},
  {"itemName": "Loaded fries", "Order": 21, "Price": 1095},
  {"itemName": "Beef chilli", "Order": 22, "Price": 1450},
  {"itemName": "Three bean chilli", "Order": 23, "Price": 1450},
  {"itemName": "Sweet and sour chicken", "Order": 24, "Price": 1595},
  {"itemName": "Chicken tikka", "Order": 25, "Price": 1495},
  {"itemName": "Keralan cauli curry", "Order": 26, "Price": 1395},
  {"itemName": "Pizza - chilli", "Order": 27, "Price": 1395},
  {"itemName": "pizza - Saucy", "Order": 28, "Price": 1395},
  {"itemName": "pizza - Clucking", "Order": 29, "Price": 1395},
  {"itemName": "pizza - Crispy", "Order": 30, "Price": 1395},
  {"itemName": "Veggie pizza", "Order": 31, "Price": 1095},
  {"itemName": "Sides", "Order": 32, "Price": null},
  {"itemName": "Jacobs superstack pizza", "Order": 33, "Price": 1395},
  {"itemName": "York pudding wrap", "Order": 34, "Price": 1495},
  {"itemName": "Sauce", "Order": 35, "Price": null},
  {"itemName": "End", "Order": 36, "Price": null},
  {"itemName": "Cont", "Order": 37, "Price": null},
  {"itemName": "No", "Order": 38, "Price": null}
];const dessOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Choc brownie gf", "Order": 2, "Price": 750},
  {"itemName": "Ice cream/ sorbet", "Order": 3, "Price": null},
  {"itemName": "Mixed berry cheesecake", "Order": 4, "Price": 750},
  {"itemName": "1 scoop ice-cream", "Order": 5, "Price": 350},
  {"itemName": "Sticky toffee pudding", "Order": 6, "Price": 750},
  {"itemName": "2 scoop", "Order": 7, "Price": 450},
  {"itemName": "Oreo cheesecake", "Order": 8, "Price": 750},
  {"itemName": "3 scoop", "Order": 9, "Price": 550},
  {"itemName": "Biscoff waffle", "Order": 10, "Price": 750},
  {"itemName": "Allergy", "Order": 11, "Price": null},
  {"itemName": "Sides", "Order": 12, "Price": null},
  {"itemName": "No", "Order": 13, "Price": null}
];const tuesOptions = [
  {"itemName": "Bar Misc", "Order": 0, "Price": null},
  {"itemName": "Food Misc", "Order": 1, "Price": null},
  {"itemName": "Cod and chips (tct)", "Order": 2, "Price": 1395},
  {"itemName": "Battered sausage and chips", "Order": 3, "Price": 1095},
  {"itemName": "Half roast chicken", "Order": 4, "Price": 1295},
  {"itemName": "Homemade pie and chips", "Order": 5, "Price": 1395},
  {"itemName": "Curry sauce", "Order": 6, "Price": 200},
  {"itemName": "Mushy peas", "Order": 7, "Price": 100},
  {"itemName": "Bakes beans", "Order": 8, "Price": 100},
  {"itemName": "Bread roll & butter", "Order": 9, "Price": 200},
  {"itemName": "Coleslaw", "Order": 10, "Price": 200},
  {"itemName": "Sides no", "Order": 11, "Price": null}
];
mainmenu()
function removeBlock() {
    var gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
}

function mainmenu() {
  removeBlock()
  var gridContainer = document.querySelector('.grid-container');
  var gridItem
  for (var item of defaultOptions) {
    gridItem = document.createElement("button");
    console.log(item)
    gridItem.setAttribute("onclick", item.onclick);
    gridItem.innerText = item.itemName;
    gridItem.className = "grid-item";
    gridContainer.appendChild(gridItem);
        } 
}
function create (element) {
  const itemText = element.textContent.trim().toLowerCase().substring(0,4).trim();
  console.log(`ItemText: ${itemText}`, `Type of itemText: ${typeof itemText}`);
  const searchTerm = (itemText + "Options");
  const optionsArrayName = searchTerm;
  let matchedOption;

  try {
    matchedOption = eval(optionsArrayName);
  } catch (e) {
    console.error(`Options array ${optionsArrayName} not found.`);
    return;
  }

  console.log(matchedOption)


  if (matchedOption) {
    removeBlock()
    var gridContainer = document.querySelector('.grid-container');
    var gridItem
  
    console.log(matchedOption)
    for (var item of matchedOption)  {
      gridItem = document.createElement("button");
      console.log(item)
      gridItem.setAttribute("Price", item.Price);
      gridItem.setAttribute("onclick", "mainmenu()");
      gridItem.innerText = item.itemName;
      gridItem.className = "grid-item";
      gridContainer.appendChild(gridItem);
    }  
  }
}
