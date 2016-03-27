// cookie-shop Start
// Store Objects
var pioneerSquare = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookieSale: 5.2
};
//genterating random numbers using maxCustomer and minCustomer
 pioneerSquare.customerPerHour=function() {
     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
 }

 var portlandAirport = {
   minCustomer: 6,
   maxCustomer: 24,
   avgCookieSale: 1.2
 };

 portlandAirport.customerPerHour =function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
 }

var washingtonSquare = {
   minCustomer: 11,
   maxCustomer: 38,
   avgCookieSale: 1.2
 };

 washingtonSquare.customerPerHour =function() {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
     }

 var sellwood = {
   minCustomer: 20,
   maxCustomer: 48,
   avgCookieSale: 3.3
 };

 sellwood.customerPerHour =function() {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
 }

 var pearlDistrict= {
   minCustomer: 3,
   maxCustomer: 24,
   avgCookieSale: 2.6
 };

 pearlDistrict.customerPerHour = function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
 }

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
      listItem.innerHTML += "<li>" + (index-2) +" PM" + ": " +cookieArray[index] +"</li>";
    } else if (index+10 == 12){
      listItem.innerHTML += "<li>12 PM" + ": " +cookieArray[index] +"</li>";
    }
    else {
      listItem.innerHTML += "<li>" + (index+10) +" AM" + ": " +cookieArray[index] +"</li>";
    }
    sum += cookieArray[index];
  }
  listItem.innerHTML += "<li>" + "Total sales: " + sum + "</li>";
}


// calling
var stores = [pioneerSquare, washingtonSquare, sellwood];

addToUl(pioneerSquare, "cookie");
addToUl(portlandAirport, "cookieTwo");
addToUl(washingtonSquare, "cookieThree");
addToUl(sellwood, "cookieFour");
addToUl(pearlDistrict, "cookieFive");
