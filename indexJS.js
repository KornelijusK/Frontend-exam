fetch("https://63443cdedcae733e8fdaec85.mockapi.io/AdSite")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);

      data.sort((a,b) => {
        if (a.itemPrice > b.itemPrice) {
          return 1
      } else {
          return -1
      }})

    const itemsContainer = document.getElementById("items");

    data.forEach((item) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item");

      const clickableItem = document.createElement("a");
      clickableItem.style.textDecoration = "none";
      clickableItem.style.color = "rgb(73, 64, 64)";
      clickableItem.style.cursor = "pointer";

      const itemLocationContainer = document.createElement("div");
      itemLocationContainer.classList.add("item-location");
      itemLocationContainer.innerHTML = "City: " + item.itemLocation;
  
      const itemImageContainer = document.createElement("div");
      itemImageContainer.classList.add("item-image");
      itemImageContainer.style.backgroundImage = `url(${item.itemUrl})`;
      itemImageContainer.style.backgroundRepeat = "no-repeat"
      itemImageContainer.style.backgroundSize = "cover";
      itemImageContainer.style.backgroundPosition = "center";              
       
      const itemInformationContainer = document.createElement("div");
      itemInformationContainer.classList.add("item-information");

      const itemNameContainer = document.createElement("div");
      itemNameContainer.classList.add("item-name");
      itemNameContainer.innerHTML = item.itemName;

      const itemDescriptionContainer = document.createElement("div");
      itemDescriptionContainer.classList.add("item-description");
      itemDescriptionContainer.innerHTML = item.itemDescription;

      const itemPriceContainer = document.createElement("div");
      itemPriceContainer.classList.add("item-price");
      itemPriceContainer.innerHTML = "Price: " + item.itemPrice + " eur";

      itemContainer.addEventListener("click", () => {
      localStorage.setItem("itemId", item.id);
      window.location.replace("./singleItemPage.html");
      });
        
      itemInformationContainer.append(itemNameContainer, itemDescriptionContainer, itemPriceContainer);
      itemContainer.append(itemLocationContainer, itemImageContainer, itemInformationContainer);
      clickableItem.append(itemContainer);
      itemsContainer.append(clickableItem);    
    });});  