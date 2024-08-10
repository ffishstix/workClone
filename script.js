const defaultOptions =            [
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
];const beerOptions =             [
    { "itemName": "Bar Misc", "Order": 0, "price": 0 },
    { "itemName": "Food Misc", "Order": 1, "price": 0},
    { "itemName": "AMSTEL", "Order": 2, "price": 520 },
    { "itemName": "KOREV", "Order": 3, "price": 560 },
    { "itemName": "BIRRA MORETTI", "Order": 4, "price": 600 },
    { "itemName": "TARKA FOUR", "Order": 5, "price": 490 },
    { "itemName": "TRIBUTE", "Order": 6, "price": 490 },
    { "itemName": "LEGEND", "Order": 7, "price": 490 },
    { "itemName": "OTTER ALE", "Order": 8, "price": 490 },
    { "itemName": "Hawkstone Premium Lager", "Order": 9, "price": 500 },
    { "itemName": "INCHES' MEDIUM APPLE", "Order": 10, "price": 510 },
    { "itemName": "THACHERS GOLD", "Order": 11, "price": 510 },
    { "itemName": "GUINNESS", "Order": 12, "price": 540 },
    { "itemName": "NEWCASTLE BROWN", "Order": 13, "price": 520 },
    { "itemName": "Peroni", "Order": 14, "price": 350 },
    { "itemName": "Desperados", "Order": 15, "price": 430 },
    { "itemName": "Corona", "Order": 16, "price": 350 },
    { "itemName": "DRINK IN", "Order": 17, "price": null },
    { "itemName": "Thachers Haze Bottle", "Order": 18, "price": 480 },
    { "itemName": "Thatchers Rascal", "Order": 19, "price": 520 },
    { "itemName": "Thatchers Apple & B/C", "Order": 20, "price": 520 },
    { "itemName": "Thatchers Blood Orange", "Order": 21, "price": 520 },
    { "itemName": "Old Mout Berries + Cherries", "Order": 22, "price": 520 },
    { "itemName": "Old Mout Strawb + Apple", "Order": 23, "price": 520 },
    { "itemName": "Crabbies Raspberry", "Order": 24 , "price": 520 },
    { "itemName": "Crabbies", "Order": 25 , "price": 500},
    { "itemName": "Alcohol free", "Order": 26, "price": null },
    { "itemName": "Sandford Devon rose", "Order": 27, "price": 520},
    { "itemName": "Sandford Devon Red", "Order": 28, "price": 500},
    { "itemName": "Sandford Devon Mist", "Order": 29, "price": 500},
    { "itemName": "With Ice", "Order": 30, "price": null},
    { "itemName": "Coke", "Order": 31 , "price": null},
    { "itemName": "Pepsi", "Order": 32, "price": null},
    { "itemName": "Lemonade", "Order": 33, "price": null},
    { "itemName": "Soda Water", "Order": 34, "price": null},
    { "itemName": "Cordial", "Order": 35, "price": null}
];const softdrinkOptions =        [
  {"itemName": "Bar Misc", "Order": 0, "price": 0},
  {"itemName": "Food Misc", "Order": 1, "price": 0},
  { "itemName": "Cordial" , "Order": 2 , "price": null},
  { "itemName": "Fruit juice", "Order": 3, "price": null},
  { "itemName": "J20", "Order": 4, "price": null},
  { "itemName": "Fruit shoot", "Order": 5, "price": null},
  { "itemName": "Luscombe", "Order": 6, "price": null },
  { "itemName": "Appletizer", "Order": 7, "price": 350 },
  { "itemName": "Water", "Order": 8, "price": 0 },
  { "itemName": "Tonic & mixers", "Order": 9, "price": null },
  { "itemName": "Glass of milk pint", "Order": 10, "price": 300 },
  { "itemName": "Jug of water", "Order": 11, "price": null },
  { "itemName": "Pepsi can", "Order": 12, "price": 150 },
  { "itemName": "Red bull", "Order": 13, "price": 350 },
  { "itemName": "Glass water", "Order": 14, "price": 0 },
  { "itemName": "Oj+lemonade pint", "Order": 15, "price": 350 },
  { "itemName": "Ice", "Order": 16, "price": null },
  { "itemName": "Slice", "Order": 17, "price": null },
  { "itemName": "Lime and soda pint", "Order": 18, "price": 250 },
  { "itemName": "Lemonade+", "Order": 19, "price": null },
  { "itemName": "Soda+", "Order": 20, "price": null },
  { "itemName": "Soda", "Order": 21, "price": null },
  { "itemName": "Coke", "Order": 22, "price": null },
  { "itemName": "Pepsi", "Order": 23, "price": null },
  { "itemName": "Lemonade", "Order": 24, "price": null }

];const spiritsOptions =          [
  {"itemName": "Bar Misc", "Order": 0, "price": 0},
  {"itemName": "Food Misc", "Order": 1, "price": 0},
  {"itemName": "Famous grouse", "Order": 2, "price": 330},
  {"itemName": "Jack Daniels", "Order": 3, "price": 370},
  {"itemName": "Gin", "Order": 4, "price": null},
  {"itemName": "Rum", "Order": 5, "price": null},
  {"itemName": "Cap spiced", "Order": 6, "price": 330},
  {"itemName": "Brandy", "Order": 7, "price": null},
  {"itemName": "Vodka", "Order": 8, "price": null},
  {"itemName": "Kraken spiced", "Order": 9, "price": 370},
  {"itemName": "Whisky", "Order": 10, "price": null},
  {"itemName": "Port", "Order": 11, "price": null},
  {"itemName": "Bacardi", "Order": 12, "price": 300},
  {"itemName": "Liqueurs", "Order": 13, "price": null},
  {"itemName": "Sherry", "Order": 14, "price": null},
  {"itemName": "Malibu", "Order": 15, "price": 260},
  {"itemName": "Vermouth", "Order": 16, "price": null},
  {"itemName": "With ice", "Order": 17, "price": null},
  {"itemName": "Southern comfort", "Order": 18, "price": 320},
  {"itemName": "Als gin not available", "Order": 19, "price": null},
  {"itemName": "Slice", "Order": 21, "price": null},
  {"itemName": "Disaronno", "Order": 22, "price": 300},
  {"itemName": "Pimms", "Order": 23, "price": 400},
  {"itemName": "Pimms jug", "Order": 24, "price": 1500},
  {"itemName": "Coke small dash", "Order": 25, "price": 100},
  {"itemName": "Lemonade small dash", "Order": 26, "price": 100},
  {"itemName": "Soda small dash", "Order": 27, "price": 50},
  {"itemName": "Alcohol free", "Order": 28, "price": null},
  {"itemName": "Tonic & mixers", "Order": 29, "price": null}
];const wineOptions =             [
  {"itemName": "Bar Misc", "Order": 0, "price": 0},
  {"itemName": "Food Misc", "Order": 1, "price": 0},
  {"itemName": "House sauce blanc chilli", "Order": 2, "price": null},
  {"itemName": "Sauv blanc (NZ)", "Order": 3, "price": null},
  {"itemName": "Pino grigio", "Order": 4, "price": null},
  {"itemName": "Chardonnay", "Order": 5, "price": null},
  {"itemName": "Blanco rioja (bottle)", "Order": 6, "price": 2600},
  {"itemName": "Picpoul de pinet (bottle)", "Order": 7, "price": 2700},
  {"itemName": "House merlot", "Order": 8, "price": null},
  {"itemName": "Shiraz", "Order": 9, "price": null},
  {"itemName": "Malbec", "Order": 10, "price": null},
  {"itemName": "Pino noir (bottle)", "Order": 11, "price": 2800},
  {"itemName": "El mason rioja (bottle)", "Order": 12, "price": 3200},
  {"itemName": "Appassimento rosso", "Order": 13, "price": 2600},
  {"itemName": "Mcguigan 0 sauv blanc Bt", "Order": 14, "price": 1200},
  {"itemName": "Garnacha rose (dry)", "Order": 15, "price": null},
  {"itemName": "Zinfandel rose (sweet)", "Order": 16, "price": null},
  {"itemName": "Chateau routes rose (bottle)", "Order": 17, "price": 2800},
  {"itemName": "Mr goose rose (bottle)", "Order": 18, "price": 2500},
  {"itemName": "Landon champagne", "Order": 19, "price": 5900},
  {"itemName": "Cremant delimoux", "Order": 20, "price": 3500},
  {"itemName": "Nozeco 75cl", "Order": 21, "price": 1200},
  {"itemName": "Nozeco rose 75cl", "Order": 22, "price": 1500},
  {"itemName": "Prosecco rose mini", "Order": 23, "price": 875},
  {"itemName": "Prosecco glass 175ml", "Order": 24, "price": 670},
  {"itemName": "Prosecco rose large 75cl", "Order": 25, "price": 2600},
  {"itemName": "Prosecco large 75cl", "Order": 26, "price": 2600},
  {"itemName": "Lemonade small dash", "Order": 27, "price": 100},
  {"itemName": "Lemonade large dash", "Order": 28, "price": 130},
  {"itemName": "Soda small dash", "Order": 29, "price": 50},
  {"itemName": "Soda large dash", "Order": 30, "price": 80}
];const breakfastOptions =        [
  {"itemName": "Bar Misc", "Order": 0, "price": 0},
  {"itemName": "Food Misc", "Order": 1, "price": 0},
  {"itemName": "3-item", "Order": 2, "price": null},
  {"itemName": "4-item", "Order": 3, "price": null},
  {"itemName": "5-item", "Order": 4, "price": null},
  {"itemName": "6-item", "Order": 5, "price": null},
  {"itemName": "7-item", "Order": 6, "price": null},
  {"itemName": "8-item", "Order": 7, "price": null},
  {"itemName": "9-item", "Order": 8, "price": null},
  {"itemName": "10-item", "Order": 9, "price": null},
  {"itemName": "11-item", "Order": 10, "price": null},
  {"itemName": "12-item", "Order": 11, "price": null},
  {"itemName": "13-item", "Order": 12, "price": null},
  {"itemName": "14-item", "Order": 13, "price": null},
  {"itemName": "Breakfast Bap ", "Order": 14, "price": 500},
  {"itemName": "Breakfast Swadnwich", "Order": 15, "price": 500},
  {"itemName": "Breakfast Extra", "Order": 16, "price": 100},
  {"itemName": "3 pancakes bacon/mapel", "Order": 17, "price": 550},
  {"itemName": "Bacon", "Order": 18, "price": null},
  {"itemName": "Sausage", "Order": 19, "price": null},
  {"itemName": "Beans", "Order": 20, "price": null},
  {"itemName": "Mushrooms", "Order": 21, "price": null},
  {"itemName": "Tomatoes", "Order": 22, "price": null},
  {"itemName": "Veggie sausage", "Order": 23, "price": null},
  {"itemName": "Fried egg", "Order": 24, "price": null},
  {"itemName": "Scrambled egg (2 eggs)", "Order": 25, "price": null},
  {"itemName": "Black pudding", "Order": 26, "price": null},
  {"itemName": "Hogs pudding", "Order": 28, "price": null},
  {"itemName": "Hash brown", "Order": 29, "price": null},
  {"itemName": "Saute potatoes", "Order": 30, "price": null},
  {"itemName": "Fried bread", "Order": 31, "price": null},
  {"itemName": "White toast X1", "Order": 32, "price": null},
  {"itemName": "Granary X1", "Order": 33, "price": null},
  {"itemName": "To be cont", "Order": 0, "price": null},
  {"itemName": "End of order", "Order": 0, "price": null}
];const barsnackssundryOptions =  [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Salted nuts", "Order": 2, "price": 150},
  {"itemName": "Dry roasted nuts", "Order": 3, "price": 150},
  {"itemName": "Port scratchings", "Order": 4, "price": 130},
  {"itemName": "Mini cheddars", "Order": 5, "price": 150},
  {"itemName": "Chorizo crisps", "Order": 6, "price": 150},
  {"itemName": "Salted crisps", "Order": 7, "price": 150},
  {"itemName": "Salt and vinegarr crisps", "Order": 8, "price": 150},
  {"itemName": "Cheese and onion crisps", "Order": 9, "price": 150},
  {"itemName": "Bacon fries", "Order": 10, "price": 130},
  {"itemName": "Beef crisps", "Order": 11, "price": 150}
  
];const hotbevOptions  =          [
  {"itemName": "Bar Misc", "Order": 0, "price": 0},
  {"itemName": "Food Misc", "Order": 1, "price": 0},
  {"itemName": "Floater coffee", "Order": 12, "price": 330},
  {"itemName": "Hot choc", "Order": 12, "price": 350},
  {"itemName": "Chai latte", "Order": 12, "price": 350},
  {"itemName": "Clay hot choc", "Order": 12, "price": 400},
  {"itemName": "Flat white", "Order": 12, "price": 350},
  {"itemName": "Oat milk", "Order": 12, "price": 50},
  {"itemName": "Lattee", "Order": 12, "price": 350},
  {"itemName": "Soya milk", "Order": 12, "price": 50},
  {"itemName": "Espresso", "Order": 12, "price": 250},
  {"itemName": "Vanilla", "Order": 12, "price": 50},
  {"itemName": "Caramel", "Order": 12, "price": 50},
  {"itemName": "Americano", "Order": 12, "price": 300},
  {"itemName": "Speciality tea", "Order": 12, "price": 350},
  {"itemName": "Capachino", "Order": 12, "price": 350},
  {"itemName": "Decaff", "Order": 12, "price": 0},
  {"itemName": "Mocha", "Order": 12, "price": null},
  {"itemName": "Separate milk", "Order": 12, "price": null},
  {"itemName": "Irish coffee", "Order": 12, "price": null}
  
];const cocktailOptions =         [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Bramble", "Order": 2, "price": 695},
  {"itemName": "Passion fruit martini", "Order": 3, "price": 695},
  {"itemName": "Devon stormy", "Order": 4, "price": 695},
  {"itemName": "Espresso martini", "Order": 5, "price": 695},
  {"itemName": "Seabird", "Order": 6, "price": 695},
  {"itemName": "Strawberry daiquiri", "Order": 7, "price": 695},
  {"itemName": "Aperol spritz", "Order": 8, "price": 695},
  {"itemName": "Cosmopolitan", "Order": 9, "price": 695},
  {"itemName": "Rhubarb + ginger fizz", "Order": 10, "price": 750},
  {"itemName": "Raspberry fizz", "Order": 11, "price": 750},
  {"itemName": "Plum + vanilla fizz", "Order": 12, "price": 750},
  {"itemName": "Snow ball", "Order": 13, "price": 450},
  {"itemName": "Shot of prosecco", "Order": 14, "price": 100}
    
];const tobaccoOptions  =         [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "B&H sky blue s/k", "Order": 2, "price": 1300},
  {"itemName": "Cig papers", "Order": 3, "price": 35},
  {"itemName": "L&B blue k/s", "Order": 4, "price": 1300},
  {"itemName": "Lighter", "Order": 5, "price": 150},
  {"itemName": "Embassy sig gold", "Order": 6, "price": 1275},
  {"itemName": "Filters", "Order": 7, "price": 120},
  {"itemName": "Cutters choice", "Order": 8, "price": 2100},
  {"itemName": "Golden Virginia", "Order": 9, "price": 2300},
  {"itemName": "Henri winter mans", "Order": 10, "price": 1300},
  {"itemName": "Hamlet", "Order": 11, "price": 750},
  {"itemName": "Vape", "Order": 12, "price": 600}  
];const startersOptions =         [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "**training**", "Order": 2, "price": null},
  {"itemName": "**starters**", "Order": 3, "price": null},
  {"itemName": "Nachos", "Order": 4, "price": 795},
  {"itemName": "Chilly chicken starter", "Order": 5, "price": 795},
  {"itemName": "Halloumi fries", "Order": 6, "price": 795},
  {"itemName": "Salt 'n' pepper squid", "Order": 7, "price": 795},
  {"itemName": "Spicy sweetcorn fritters", "Order": 8, "price": 795},
  {"itemName": "Camembert", "Order": 9, "price": 895},
  {"itemName": "Chicken  goujons", "Order": 0, "price": 795},
  {"itemName": "With jalapenos", "Order": 0, "price": 75},
  {"itemName": "Steve wings", "Order": 12, "price": 675},
  {"itemName": "Allergy", "Order": 13, "price": null},
  {"itemName": "Sides", "Order": 14, "price": null},
  {"itemName": "No", "Order": 15, "price": null},
];const mainsOptions  =           [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Classic beefburger", "Order": 2, "price": 13.95},
  {"itemName": "Classic beefburger", "Order": 3, "price": 13.95},
  {"itemName": "Rump steak", "Order": 4, "price": 21.95},
  {"itemName": "Ham, egg and chips", "Order": 5, "price": 14.50},
  {"itemName": "Clukin bull", "Order": 6, "price": 1750},
  {"itemName": "Scampi large", "Order": 7, "price": 1495},
  {"itemName": "Small ham egg chips", "Order": 8, "price": 1050},
  {"itemName": "Chicken burger", "Order": 9, "price": 1395},
  {"itemName": "Scampi small", "Order": 10, "price": 1095},
  {"itemName": "Sweet and sour chicken", "Order": 11, "price": 1595},
  {"itemName": "Garden burger", "Order": 12, "price": 1395},
  {"itemName": "Fish and chips", "Order": 13, "price": 1695},
  {"itemName": "Food long chili dog", "Order": 14, "price": 1695},
  {"itemName": "Sm seanbass fishcake", "Order": 15, "price": 11.95},
  {"itemName": "Chicken tikka masala", "Order": 16, "price": 1495},
  {"itemName": "Hunter chicken", "Order": 17, "price": 1695},
  {"itemName": "Lge sea bass fishcakes", "Order": 18, "price": 1595},
  {"itemName": "Keralan cauli curry", "Order": 19, "price": 1395},
  {"itemName": "Lg gammon steak", "Order": 20, "price": 1895},
  {"itemName": "Beef chilli (gf)", "Order": 21, "price": 1450},
  {"itemName": "Crispy chilly chicken", "Order": 22, "price": 1595},
  {"itemName": "Sm gammon steak", "Order": 23, "price": 1295},
  {"itemName": "Three bean chilli", "Order": 24, "price": 1450},
  {"itemName": "Allergy", "Order": 25, "price": null},
  {"itemName": "End of order", "Order": 26, "price": null},
  {"itemName": "To be cont", "Order": 27, "price": null},
  {"itemName": "Sides", "Order": 28, "price": null}
];const roastsOptions  =          [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Roast small pork", "Order": 2, "price": 1095},
  {"itemName": "Roast small chicken", "Order": 3, "price": 1095},
  {"itemName": "Roast small beef", "Order": 4, "price": 1095},
  {"itemName": "Roast small gammon", "Order": 5, "price": 1095},
  {"itemName": "Roast standard", "Order": 6, "price": 1495},
  {"itemName": "Roast pork bap", "Order": 7, "price": 1095},
  {"itemName": "Beef bap", "Order": 8, "price": 1095},
  {"itemName": "Chicken bap", "Order": 9, "price": 1095},
  {"itemName": "Gammon bap", "Order": 10, "price": 1095},
  {"itemName": "Stuffing", "Order": 11, "price": 50},
  {"itemName": "Large fodder bowl", "Order": 12, "price": null},
  {"itemName": "Cauli cheese bowl", "Order": 13, "price": 350},
  {"itemName": "Roast gurt", "Order": 14, "price": 1695},
  {"itemName": "Fodder bowl small", "Order": 15, "price": null},
  {"itemName": "pigs in blankets", "Order": 16, "price": 450},
  {"itemName": "Roast small no meat", "Order": 17, "price": 995},
  {"itemName": "Dairy free", "Order": 18, "price": null},
  {"itemName": "Veg wellington", "Order": 19, "price": 1495},
  {"itemName": "Roast potatoes", "Order": 20, "price": 350},
  {"itemName": "Roast std no meat", "Order": 21, "price": 1395},
  {"itemName": "Gluten free", "Order": 22, "price": null},
  {"itemName": "Nut roast large", "Order": 23, "price": 1495},
  {"itemName": "York pudding", "Order": 24, "price": 100},
  {"itemName": "Sides", "Order": 25, "price": null},
  {"itemName": "Allergy ", "Order": 26, "price": null},
  {"itemName": "No", "Order": 27, "price": null}
  

];const specialsOptions  =        [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "L/fries clucknbull", "Order": 2, "price": 1095},
  {"itemName": "Saucy click", "Order": 3, "price": 1095},
  {"itemName": "Beef/bacon/ cheese salad", "Order": 4, "price": 1395},
  {"itemName": "BBQ chicken salad", "Order": 5, "price": 1395},
  {"itemName": "Ham and cheddar salad", "Order": 6, "price": 1395},
  {"itemName": "Chicken caesar salad", "Order": 7, "price": 1395},
  {"itemName": "Special 1", "Order": 8, "price": null},
  {"itemName": "Pizza - chilli dog", "Order": 9, "price": 1350},
  {"itemName": "Special 2", "Order": 10, "price": null},
  {"itemName": "Pizza - saucy clicker", "Order": 11, "price": 1250},
  {"itemName": "Special 3", "Order": 12, "price": null},
  {"itemName": "Pizza - clucking bull", "Order": 13, "price": 1395},
  {"itemName": "Special 4", "Order": 14, "price": null},
  {"itemName": "Pizza - crispy quacker", "Order": 15, "price": 1395},
  {"itemName": "Special 5", "Order": 16, "price": null},
  {"itemName": "Veggie pizza", "Order": 17, "price": 1095},
  {"itemName": "Allergy", "Order": 18, "price": null},
  {"itemName": "Sides", "Order": 19, "price": null},
  {"itemName": "No", "Order": 20, "price": null}
  
  
];const lunchOptions  =           [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Brunch small", "Order": 2, "price": 1050},
  {"itemName": "Brunch large", "Order": 3, "price": 1250},
  {"itemName": "Add cheese", "Order": 4, "price": 100},
  {"itemName": "Homemade coleslaw", "Order": 5, "price": 200},
  {"itemName": "Beef and bacon baguette", "Order": 6, "price": 1295},
  {"itemName": "Plain jacket with butter", "Order": 7, "price": 695},
  {"itemName": "Tuna mayo baguette", "Order": 8, "price": 1095},
  {"itemName": "Chicken salad baguette", "Order": 9, "price": 1095},
  {"itemName": "Beans jacket", "Order": 10, "price": 795},
  {"itemName": "Cheese jacket", "Order": 11, "price": 795},
  {"itemName": "Fish fingers baguette", "Order": 12, "price": 1195},
  {"itemName": "Cheese and beans jacket", "Order": 13, "price": 850},
  {"itemName": "Bacon and cheddar baguette", "Order": 14, "price": 1095},
  {"itemName": "Tuna mayo jacket", "Order": 15, "price": 850},
  {"itemName": "Ham and cheese baguette", "Order": 16, "price": 995},
  {"itemName": "Beef chilli jacket", "Order": 17, "price": 895},
  {"itemName": "Chicken goujons baguette", "Order": 18, "price": 1195},
  {"itemName": "Smoky bean chilli jacket", "Order": 19, "price": 895},
  {"itemName": "Cheddar + chutney baguette", "Order": 20, "price": 995},
  {"itemName": "Allergy", "Order": 21, "price": null},
  {"itemName": "Sides", "Order": 22, "price": null},
  {"itemName": "No", "Order": 23, "price": null}
  
];const kidsOptions =             [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "With cheese", "Order": 2, "price": 100},
  {"itemName": "Fish fingers and chips", "Order": 3, "price": 695},
  {"itemName": "Chicken bites", "Order": 4, "price": 695},
  {"itemName": "Courtney's cheese roll", "Order": 5, "price": 450},
  {"itemName": "Mini naan pizza", "Order": 6, "price": 795},
  {"itemName": "Child's sausages", "Order": 7, "price": 795},
  {"itemName": "Mac n cheese kids", "Order": 8, "price": 795},
  {"itemName": "Allergy", "Order": 9, "price": null},
  {"itemName": "Sides", "Order": 10, "price": null},
  {"itemName": "No", "Order": 11, "price": null}
];const sundayeveOptions =        [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Camembert", "Order": 2, "price": 895},
  {"itemName": "Halloumi fries", "Order": 3, "price": 795},
  {"itemName": "Nachos", "Order": 4, "price": 795},
  {"itemName": "Chicken goujons", "Order": 5, "price": 795},
  {"itemName": "Salt n pepper squid", "Order": 6, "price": 795},
  {"itemName": "Spicy sweetcorn fritters", "Order": 7, "price": 795},
  {"itemName": "Hunters chicken", "Order": 8, "price": 1695},
  {"itemName": "Rump steak", "Order": 9, "price": 2195},
  {"itemName": "Scampi large", "Order": 10, "price": 1495},
  {"itemName": "Scampi small", "Order": 11, "price": 1095},
  {"itemName": "Foot long chilli", "Order": 12, "price": null}, // come back when paul replys
  {"itemName": "Ham egg chips", "Order": 13, "price": 1450},
  {"itemName": "Small", "Order": 14, "price": 1050},
  {"itemName": "Lge sea bass", "Order": 15, "price": 1595},
  {"itemName": "Sm", "Order": 16, "price": 1195},
  {"itemName": "Classic beef", "Order": 17, "price": 1395},
  {"itemName": "Chicken burger", "Order": 18, "price": 1395},
  {"itemName": "Clukin", "Order": 19, "price": 1750},
  {"itemName": "Garden burger", "Order": 20, "price": 1395},
  {"itemName": "Loaded fries", "Order": 21, "price": 1095},
  {"itemName": "Beef chilli", "Order": 22, "price": 1450},
  {"itemName": "Three bean chilli", "Order": 23, "price": 1450},
  {"itemName": "Sweet and sour chicken", "Order": 24, "price": 1595},
  {"itemName": "Chicken tikka", "Order": 25, "price": 1495},
  {"itemName": "Keralan cauli curry", "Order": 26, "price": 1395},
  {"itemName": "Pizza - chilli", "Order": 27, "price": 1395},
  {"itemName": "pizza - Saucy", "Order": 28, "price": 1395},
  {"itemName": "pizza - Clucking", "Order": 29, "price": 1395},
  {"itemName": "pizza - Crispy", "Order": 30, "price": 1395},
  {"itemName": "Veggie pizza", "Order": 31, "price": 1095},
  {"itemName": "Sides", "Order": 32, "price": null},
  {"itemName": "Jacobs superstack pizza", "Order": 33, "price": 1395},
  {"itemName": "York pudding wrap", "Order": 34, "price": 1495},
  {"itemName": "Sauce", "Order": 35, "price": null},
  {"itemName": "End", "Order": 36, "price": null},
  {"itemName": "Cont", "Order": 37, "price": null},
  {"itemName": "No", "Order": 38, "price": null}
];const dessertsOptions  =        [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Choc brownie gf", "Order": 2, "price": 750},
  {"itemName": "Ice cream/ sorbet", "Order": 3, "price": null},
  {"itemName": "Mixed berry cheesecake", "Order": 4, "price": 750},
  {"itemName": "1 scoop ice-cream", "Order": 5, "price": 350},
  {"itemName": "Sticky toffee pudding", "Order": 6, "price": 750},
  {"itemName": "2 scoop", "Order": 7, "price": 450},
  {"itemName": "Oreo cheesecake", "Order": 8, "price": 750},
  {"itemName": "3 scoop", "Order": 9, "price": 550},
  {"itemName": "Biscoff waffle", "Order": 10, "price": 750},
  {"itemName": "Allergy", "Order": 11, "price": null},
  {"itemName": "Sides", "Order": 12, "price": null},
  {"itemName": "No", "Order": 13, "price": null}
];const tuesdaychippyteaOptions = [
  {"itemName": "Bar Misc", "Order": 0, "price": null},
  {"itemName": "Food Misc", "Order": 1, "price": null},
  {"itemName": "Cod and chips (tct)", "Order": 2, "price": 1395},
  {"itemName": "Battered sausage and chips", "Order": 3, "price": 1095},
  {"itemName": "Half roast chicken", "Order": 4, "price": 1295},
  {"itemName": "Homemade pie and chips", "Order": 5, "price": 1395},
  {"itemName": "Curry  sauce", "Order": 6, "price": 200},
  {"itemName": "Mushy peas", "Order": 7, "price": 100},
  {"itemName": "Bakes beans", "Order": 8, "price": 100},
  {"itemName": "Bread roll & butter", "Order": 9, "price": 200},
  {"itemName": "Coleslaw", "Order": 10, "price": 200},
  {"itemName": "Sides no", "Order": 11, "price": null}
];const halfOptions =             [
  {"itemName": "to be worked on", "Order": 0, "price": null}
];const ptjugOptions =            [
  {"itemName": "to be worked on", "Order": 0, "price": null}
]; const clerks = [
  {"number": "24", "name": "Fin"},
  {"number": "69", "name": "Paul"}
];
function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

mainmenu()
let currentItems = []
let qty = 0
let currentPrice = 0.00
let currentClerk = ""
let clerkName = ""

function removeBlock() {
    var gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
}

function mainmenu() {
  removeBlock()
  toggleRow()
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
  toggleRow()
  
  const unacceptableElements = ["0", "1", "2", "3", 
    "4", "5","6", "7", "8", "9", "`", "¬", "!", "£", 
    "$", "%", "^", "&", "*", "(",")", "-", "_", "=", 
    "+", "{", "[", "}", "]", ";", ":", "'", "@", "#", 
    "~", ",", "<", ">", ".", "?", "/", "|", " "]
  let itemText = element.textContent.toLowerCase();
  let nextText = ""
  for (let i = 0; i < itemText.length; i++) { 
    if (!(unacceptableElements.includes(itemText[i]))){
      nextText = nextText + itemText[i]
      console.log(nextText)
    }
  }
  
  nextText.substring(0,4).trim()
  const searchTerm = (nextText + "Options");
  let matchedOption;

  try {
    matchedOption = eval(searchTerm);
  } catch (e) {
    console.error(`Options array ${searchTerm} not found.`);
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
      gridItem.setAttribute("price", item.price);
      gridItem.setAttribute("onclick", "chosen(this)");
      gridItem.innerText = item.itemName;
      gridItem.className = "grid-item";
      gridItem.id = item.itemName;
      gridContainer.appendChild(gridItem);

    }
    for (let i = 0; i < 8; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "invisible";
      gridContainer.appendChild(gridItem);
      console.log("here");
    } 
  }
}

function toggleRow() {
  const bottom = document.querySelector('.bottom');
  console.log(bottom)
  const classesToRemove = ["back", "attached-left", "hook-left"];
  let iscontain = false
  const children = bottom.children
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (classesToRemove.some(cls => 
      child.classList.contains(cls))) {
      iscontain = true;
      break;
    }
  }

  if (iscontain) {
    Array.from(children).forEach(child => {
        if (classesToRemove.some(cls =>
           child.classList.contains(cls))) {
            child.remove(); // Remove the child element
        }
    });
  } 
  else{
  var Half = document.createElement("button");
  var ptJug = document.createElement("button");
  var back = document.createElement("button");
  back.setAttribute("onclick", "mainmenu()");
  ptJug.setAttribute("onclick", "create(this)");
  Half.setAttribute("onclick", "create(this)");
  back.innerHTML = "<h1>back</h1>";
  ptJug.innerHTML = "<h1>4pt Jug</h1>";
  Half.innerHTML = "<h1>Half</h1>";
  back.className = "back";
  ptJug.className = "attached-left";
  Half.className = "hook-left";
  bottom.appendChild(back);
  bottom.appendChild(ptJug);
  bottom.appendChild(Half);
  }
}

function updateStat() {
  let right = document.querySelector(".rstat");
  right.innerText = "Total £" + String(currentPrice);
  let tap = document.querySelector(".lstat");
  tap.innerText = "Qty " + String(qty);
}

function chosen(item) {
  console.log(item);
  const itemName = item.id ;
  const price = item.getAttribute("price");
  console.log(price);
  var container = document.querySelector(".chosen");
  displayItem = document.createElement("p");
  displayItem.setAttribute("price", price);
  displayItem.textContent = itemName;
  displayItem.className = "chosen-item";
  container.appendChild(displayItem);
  if (!(price === "null" || price === "0")) {
    try {
      const intPrice = roundNumber((Number(price) / 100), 2);
      console.log("int price is: " + intPrice);
      console.log("current price: " + currentPrice);
      currentPrice = roundNumber((intPrice + currentPrice), 2);
      console.log("now current price: " + currentPrice);
      
    }
    catch (error){
      console.error(error);
    }
  }
  
  qty += 1;
  updateStat();
}

function toggleOverlay() {
  console.log("shouldnt be here")
  const overlay = document.querySelector(".overlay-forground");
  if (overlay !== null) {
    overlay.remove();
  }
  else {
    console.log("here lols")
    const  num1 = document.createElement("button");
    const  num2 = document.createElement("button");
    const  num3 = document.createElement("button");
    const  num4 = document.createElement("button");
    const  num5 = document.createElement("button");
    const  num6 = document.createElement("button");
    const  num7 = document.createElement("button");
    const  num8 = document.createElement("button");
    const  num9 = document.createElement("button");
    const  num0 = document.createElement("button");
    const  numE = document.createElement("button");
    const  numO = document.createElement("button");
    const invis = document.createElement("div");
    num1.className = "number-option removable";
    num2.className = "number-option removable";
    num3.className = "number-option removable";
    num4.className = "number-option removable";
    num5.className = "number-option removable";
    num6.className = "number-option removable";
    num7.className = "number-option removable";
    num8.className = "number-option removable";
    num9.className = "number-option removable";
    num0.className = "number-option removable";
    numE.className = "number-option removable";
    numO.className = "number-option removable";
    invis.className = "invisible removable";
    num1.id = "1-Overlay";
    num2.id = "2-Overlay";
    num3.id = "3-Overlay";
    num4.id = "4-Overlay";
    num5.id = "5-Overlay";
    num6.id = "6-Overlay";
    num7.id = "7-Overlay";
    num8.id = "8-Overlay";
    num9.id = "9-Overlay";
    num0.id = "0-Overlay";
    numE.id = "Esc-Overlay";
    numO.id = "Ok-Overlay";
    num1.onclick = "clerk(this)";
    num2.onclick = "clerk(this)";
    num3.onclick = "clerk(this)";
    num4.onclick = "clerk(this)";
    num5.onclick = "clerk(this)";
    num6.onclick = "clerk(this)";
    num7.onclick = "clerk(this)";
    num8.onclick = "clerk(this)";
    num9.onclick = "clerk(this)";
    num0.onclick = "clerk(this)";
    numE.onclick = "clerk(this)";
    numO.onclick = "clerk(this)";
    num1.innerHTML = "<h1>1</h1>";
    num2.innerHTML = "<h1>2</h1>";
    num3.innerHTML = "<h1>3</h1>";
    num4.innerHTML = "<h1>4</h1>";
    num5.innerHTML = "<h1>5</h1>";
    num6.innerHTML = "<h1>6</h1>";
    num7.innerHTML = "<h1>7</h1>";
    num8.innerHTML = "<h1>8</h1>";
    num9.innerHTML = "<h1>9</h1>";
    num0.innerHTML = "<h1>0</h1>";
    numE.innerHTML = "<h1>Esc</h1>";
    numO.innerHTML = "<h1>Ok</h1>";
    const gibnamttinni = document.createElement("div");
    gibnamttinni.className = "centered-div removable";
    gibnamttinni.appendChild(num1);
    gibnamttinni.appendChild(num2);
    gibnamttinni.appendChild(num3);
    gibnamttinni.appendChild(invis);
    gibnamttinni.appendChild(num4);
    gibnamttinni.appendChild(num5);
    gibnamttinni.appendChild(num6);
    gibnamttinni.appendChild(invis);
    gibnamttinni.appendChild(num7);
    gibnamttinni.appendChild(num8);
    gibnamttinni.appendChild(num9);
    gibnamttinni.appendChild(numE);
    gibnamttinni.appendChild(num0);
    gibnamttinni.appendChild(invis);
    gibnamttinni.appendChild(invis);
    gibnamttinni.appendChild(numO);
    const hh = document.createElement("h1");
    hh.className = "sub-rounded";
    const penis = document.createElement("div");
    penis.className =  "rounded-box removable";
    penis.appendChild(hh);
    const cn =  document.createElement("h1");
    const main = document.createElement("div");
    main.className = "overlay-forground";
    main.appendChild(cn);
    main.appendChild(penis);
    main.appendChild(gibnamttinni);

  }

}

function checkValid() {
  var tempval = false;
  console.log("here");
  const matchedOption = eval(clerks)
  for (let j = 0; j < clerks.length; j++) {
    if (clerks[j].number === currentClerk) {
      console.log(clerks[j].name);
      console.log(clerkName);
      clerkName = clerks[j].name;
      console.log(clerkName);
      tempval = true;
      console.log("x in the function: " + clerkName)
      return clerkName
    }
    console.log("it found it: " + tempval);
  }
  console.log("x in the function: " + clerkName)
  return false
}

function clerk(buttonPressed) {
  console.log(buttonPressed);
  const input = buttonPressed.id;
  console.log(input);
  const output = input[0].toLowerCase();
  if (output === "e") {
    if (currentClerk == "") {
      toggleOverlay();
    }
    else {
      currentClerk = "";
    }
  }
  else {
    if (output === "o") {
      const x = checkValid();
      console.log("x is: "  + x)
      if (x) {
        toggleOverlay();
        const bodyText = document.querySelector(".clerkName");
        bodyText.innerHTML = "<h1>" + x  + "</h1>";
      }
      currentClerk = "";
    }
    else {
      currentClerk += output;
      
    }
  }
  
  var hidden = "";
  try {
    if (!(currentClerk === "")) {
      for (let i = 0; i < currentClerk.length; i++) {
        hidden += "*";
      }
      const sq2rt = document.querySelector(".sub-rounded");
      console.log("here inniot" + hidden);
      sq2rt.innerText = hidden;
      console.log(sq2rt);
    }
  }
  catch {
    hidden = "Not Signed On";
  }
  
  
}
