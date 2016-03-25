// cookie-shop Start
var pioneerSquare = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookieSale: 5.2
};
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

var cookieArray = [];

function cookiePerHour(store) {
  var cookieTotal = 0;
  for (var index = 0; index < 8; index++) {
    var cookiePurchases = Math.floor(store.customerPerHour() * store.avgCookieSale)
    cookieArray.push(cookiePurchases);
    };
  console.log(cookieArray);
  return cookieArray;
}

function addToUl() {
var listItem = document.getElementById('cookie');
for(var index = 0; index < cookieArray.length; index++) {
  listItem.innerHTML += "<li>" + (index+10) +": " +cookieArray[index] +"</li>";
  }
}

cookiePerHour(pioneerSquare);

addToUl();
