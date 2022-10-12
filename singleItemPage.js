const getItemId = localStorage.getItem("itemId");

const buttonClick = () => {
    window.location.replace("./index.html");
}

const getOneItem = () => {
    fetch(
        `https://63443cdedcae733e8fdaec85.mockapi.io/AdSite/${getItemId}`
      )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
 
      const singleItemName = document.getElementById("nameContainer");
      singleItemName.innerHTML = data.itemName;   

      const imagePhoto = document.getElementById("itemPhoto");
      imagePhoto.src = data.itemUrl;  

      const itemPrice = document.getElementById("itemPrice");
      itemPrice.innerHTML = "Price: " + data.itemPrice + " eur";

      const itemLocation = document.getElementById("itemLocation");
      itemLocation.innerHTML = "City: " + data.itemLocation;

      const itemDescription = document.getElementById("itemDescription");
      itemDescription.innerHTML = data.itemDescription;            
    });
};

getOneItem();

const deleted = async () => {
  await new Promise((res) => setTimeout(() => {    
      fetch(
        `https://63443cdedcae733e8fdaec85.mockapi.io/AdSite/${getItemId}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )     
    .then((response) => {
      return response.json();
    })
    .then((data) => { 
      console.log("data", data);
      document.getElementById('message').innerHTML = "Your item has been deleted succesfully!";
    })
    .catch((error) => {
      console.log("error", error)
      document.getElementById('message').innerHTML = "An error occured, please try again!";  
   });
  ;  
  }, 2000))}




