for (var i = 0; i < 200; i++) {
    console.log("\n");
}

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Callbacks 1
var namesLengthMoreThanThree = names.filter(name => name.length <= 3);
function printElements(item, index) {
    console.log(index + ": " + item);
}

names.forEach(printElements);
console.log("\n");
namesLengthMoreThanThree.forEach(printElements);
console.log("\n");

//Callbacks 2
var allNamesUpperCase = names.map(arr => arr.toUpperCase());
allNamesUpperCase.forEach(printElements);

//Callbacks 3
var namesToHtmlList = "<ul>" + names.map(function (name) {
    return "<li>" + name + "</li>";
}).join("") + "</ul>";
console.log(namesToHtmlList);

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

//Callbacks 4
//Cars newer than 1999
var carsNewerThan = cars.filter(function (car) {
    if (car.year >= 1999) {
        console.log(car);
    }
});
console.log("\n");

//Al  Volvo’s
var carsMakeIs = cars.filter(function (car) {
    if (car.make === "Volvo") {
        console.log(car);
    }
});
console.log("\n");

//All cars with a price below 5000
var carsMakeIs = cars.filter(function (car) {
    if (car.price < 5000) {
        console.log(car);
    }
});

//4a
//INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );
var carsToTable= cars.map(function (car) {
    return "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price + ");\n";
    }).join("");
console.log(carsToTable);

