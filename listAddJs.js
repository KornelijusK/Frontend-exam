const buttonClick = () => {
    window.location.replace("./index.html");
}

const getItemInfo = () => {
    let itemInfo = {
       itemName: document.getElementById('itemName').value,
       itemPrice: document.getElementById('itemPrice').value,
       itemUrl: document.getElementById('itemUrl').value,
       itemDescription: document.getElementById('itemDescription').value,
       itemLocation: document.getElementById('itemLocation').value,
    };
   
    fetch("https://63443cdedcae733e8fdaec85.mockapi.io/AdSite", {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
     body: JSON.stringify(itemInfo),
   })
     .then((response) => {
       return response.json();
     })
     .then((data) => { 
       console.log("data", data);
       document.getElementById('message').innerHTML = "Your item has been uploaded succesfully!";
     })
     .catch((error) => {
       console.log("error", error)
       document.getElementById('message').innerHTML = "An error occured, please try again!";

    });
};