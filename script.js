const BeerOptions = [
    { "ItemName": "Bar Misc", "Order": 0, "Price": null },
    { "ItemName": "Food Misc", "Order": 1, "Price": null },
    { "ItemName": "AMSTEL", "Order": 2, "Price": null },
    { "ItemName": "KOREV", "Order": 3, "Price": null },
    { "ItemName": "BIRRAMORETTI", "Order": 4, "Price": null },
    { "ItemName": "TARKA FOUR", "Order": 5, "Price": null },
    { "ItemName": "TRIBUTE", "Order": 6, "Price": null },
    { "ItemName": "LEGEND", "Order": 7, "Price": null },
    { "ItemName": "OTTER ALE", "Order": 8, "Price": null },
    { "ItemName": "Hawkstone Premium Lager", "Order": 9, "Price": null },
    { "ItemName": "INCHES' MEDIUM APPLE", "Order": 10, "Price": null },
    { "ItemName": "THACHERS GOLD", "Order": 11, "Price": null },
    { "ItemName": "GUINNESS", "Order": 12, "Price": null },
    { "ItemName": "NEWCASTLE BROWN", "Order": 13, "Price": null },
    { "ItemName": "Peroni", "Order": 14, "Price": null },
    { "ItemName": "Desperados", "Order": 15, "Price": null },
    { "ItemName": "Corona", "Order": 16, "Price": null },
    { "ItemName": "DRINK IN", "Order": 17, "Price": null },
    { "ItemName": "Thachers Haze Bottle", "Order": 18, "Price": null },
    { "ItemName": "Thatchers Rascal", "Order": 19, "Price": null },
    { "ItemName": "Thatchers Apple & B/C", "Order": 20, "Price": null },
    { "ItemName": "Thatchers Blood Orange", "Order": 21, "Price": null },
    { "ItemName": "Old Mout Berries + Cherries", "Order": 22, "Price": null },
    { "ItemName": "Old Mout Strawb + Apple", "Order": 23, "Price": null }
  ];
  
function removeBlock() {
    var gridContainer = document.querySelector(".grid-container");
    for (var item of gridContainer.children) {
      const childToRemove = gridContainer.firstElementChild;
      console.log(childToRemove.innerHTML)
      if (childToRemove) {
        
        childToRemove.remove();
      }
    }
}

function createBeer() {
        var gridContainer = document.querySelector('.grid-container');
        var gridItem = document.createElement("div");
        for (var item of BeerOptions) {
          gridItem = document.createElement("div");
          console.log(item)
          gridItem.setAttribute("Price", item.Price);
          gridItem.innerText = item.ItemName;
          gridItem.className = "grid-item";
          gridContainer.appendChild(gridItem);
        } 
}