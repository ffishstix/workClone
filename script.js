

function createBeer() {
        var gridContainer = document.querySelector('.grid-container');
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.innerText = "test"
        console.log(gridContainer)
        gridContainer.appendChild(gridItem)
        

        

}