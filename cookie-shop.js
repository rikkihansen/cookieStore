// cookie-shop Start
// Store Objects
var Stores = function(minCustomer, maxCustomer, avgCookieSale, place, getElementId) {
   this.minCustomer= minCustomer;
   this.maxCustomer= maxCustomer;
   this.avgCookieSale= avgCookieSale;
   this.place= place;
   this.getElementId= getElementId;
   this.customerPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomer - this. minCustomer) + this.minCustomer);
  }
};


var pioneerSquare = new Stores(17, 88, 5.2, "Pionner Square", "cookie");
var portlandAirport= new Stores(6, 24, 1.2, "Porland Airport", "cookieTwo");
var washingtonSquare= new Stores(11, 38, 1.2, "Washington Square", "cookieThree");
var sellwood= new Stores(20, 48, 3.3, "Sellwood", "cookieFour");
var pearlDistrict= new Stores(3, 24, 2.6, "Pearl District", "cookieFive");

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
  for (var index = 0; index < cookieArray.length; index++) {
    if (index+10 > 12) {
      listItem.innerHTML += "<tr>" + (index-2)+cookieArray[index] +"</tr>";
    } else if (index+10 == 12){
      listItem.innerHTML += "<tr>" +cookieArray[index] +"</tr>";
    }
    else {
      listItem.innerHTML += "<tr>" + (index+10) +cookieArray[index] +"</tr>";
    }
    sum += cookieArray[index];
  }
  listItem.innerHTML += "<tr>" + sum + "</tr>";
}

var hours=["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "Total"];
var loaction=["pioneerSquare", "portlandAirport", "washingtonSquare", "sellwood", "pearlDistrict"];

var listItem = document.getElementById("hour");
    for(var times = 0; times < hours.length; times++){
        var listTable = listItem.innerHTML += "<th>"+ hours[times] + "</th>";
  }


// calling
//var stores = [pioneerSquare, washingtonSquare, sellwood];
//for (var places = 0; places < Stores; index++)
var places = new Array ();
places.push(new Stores(17, 88, 5.2, "Pionner Square", "cookie"));
places.push(new Stores(6, 24, 1.2, "Porland Airport", "cookieTwo"));
places.push(new Stores(11, 38, 1.2, "Washington Square", "cookieThree"));
places.push(new Stores(20, 48, 3.3, "Sellwood", "cookieFour"));
places.push(new Stores(3, 24, 2.6, "Pearl District", "cookieFive"));

 addToUl(pioneerSquare, "cookie");
 addToUl(portlandAirport, "cookieTwo");
 addToUl(washingtonSquare, "cookieThree");
 addToUl(sellwood, "cookieFour");
 addToUl(pearlDistrict, "cookieFive");
