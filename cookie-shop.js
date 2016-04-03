// cookie-shop Start
// Store Objects
var Stores = function(minCustomer, maxCustomer, avgCookieSale, place) {
   this.minCustomer= minCustomer;
   this.maxCustomer= maxCustomer;
   this.avgCookieSale= avgCookieSale;
   this.place= place;
   this.customerPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomer - this. minCustomer) + this.minCustomer);
  }
};


var pioneerSquare = new Stores(17, 88, 5.2, "Pionner Square");
var portlandAirport= new Stores(6, 24, 1.2, "Porland Airport");
var washingtonSquare= new Stores(11, 38, 1.2, "Washington Square");
var sellwood= new Stores(20, 48, 3.3, "Sellwood");
var pearlDistrict= new Stores(3, 24, 2.6, "Pearl District");

// creating a function for the cookieArray using avgCookieSale and a for loop
function cookiePerHour(store) {
  var cookieArray = [];
  var cookieTotal = 0;
  for (var index = 0; index < 8; index++) {
    var cookiePurchases = Math.floor(store.customerPerHour() * store.avgCookieSale)
    cookieArray.push(cookiePurchases);
  };

  return cookieArray;
}
// adding all of the randomly generated numbers from the array to an unordered list for each location
function addToUl(shop, elementId) {
  var listItem = document.getElementById(elementId);
  var cookieArray = cookiePerHour(shop);
  console.log(cookieArray);
  var sum = 0;
  var storeData = "<tr><td>" + shop.place + "</td>";
  for (var index = 0; index < cookieArray.length; index++) {
      storeData += "<td>" + cookieArray[index] +"</td>";
    sum += cookieArray[index];
  }
  storeData += "<td>" + sum + "</td></tr>";
  document.getElementById("table").innerHTML += storeData;
}

var hours=["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "Total"]; //hour Array
var loaction=["pioneerSquare", "portlandAirport", "washingtonSquare", "sellwood", "pearlDistrict"]; // loaction Array

//listing hour array
var listItem = document.getElementById("hour");
    for(var times = 0; times < hours.length; times++){
        var listTable = listItem.innerHTML += "<td>"+ hours[times] + "</td>";
  }


//forms
function evaluateForm(submittedForm) {
  var formIsValid = true;
  if (submittedForm.locationName.value == "") {
    alert("Please make sure you fill out all of the required information");
    formIsValid = false;
  }
  if (submittedForm.minnCustomer.value == "") {
    alert("Please make sure you fill out all of the required information");
    formIsValid = false;
  }
  if (submittedForm.maxxCustomer.value == "") {
    alert("Please make sure you fill out all of the required information");
    formIsValid = false;
  }
  if (submittedForm.avggCookieSale.value == "") {
    alert("Please make sure you fill out all of the required information");
    formIsValid = false;
  }
  var locationName = submittedForm.locationName.value;           // taking the value that was put into 'text' field
  var minnCustomer = parseInt(submittedForm.minnCustomer.value);
  var maxxCustomer = parseInt(submittedForm.maxxCustomer.value);
  var avggCookieSale = parseInt(submittedForm.avggCookieSale.value);
  if (formIsValid){
    var newStore = new Stores (minnCustomer, maxxCustomer, avggCookieSale, locationName); // made a new location based off of
    addToUl(newStore); // calling the new store                                       // the information giving in 'text' field
  }
}

// function newLocation () {
//   var locationName = locationName.value;
//   var minCustomer = minnCustomer.value;
//   var maxCustomer = maxxCustomer.value;
//   var avgCookieSale = avggCookieSale.value;
// };




// calling
var places = new Array ();
places.push(new Stores(17, 88, 5.2, "Pionner Square"));
places.push(new Stores(6, 24, 1.2, "Porland Airport"));
places.push(new Stores(11, 38, 1.2, "Washington Square"));
places.push(new Stores(20, 48, 3.3, "Sellwood"));
places.push(new Stores(3, 24, 2.6, "Pearl District"));

 addToUl(pioneerSquare);
 addToUl(portlandAirport);
 addToUl(washingtonSquare);
 addToUl(sellwood);
 addToUl(pearlDistrict);
