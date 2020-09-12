for (var i = 0; i < 200; i++) {
    console.log("\n");
}

//Function Declaration - Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
}

//Callback example
var cb = function (n1, n2, callback) {
    if (typeof n1 !== "number") {
        console.log("Expected a function but got: " + n1);
    }
    if (typeof n2 !== "number") {
        console.log("Expected a function but got: " + n2);
    }
    if (typeof callback !== "function") {
        console.log("Expected a function but got: " + callback);
    }
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);

};

// What will this print?
// 3!
console.log("\n");
console.log("## 1 ##");
console.log(add(1, 2));

// What will it print and what does add represent?
//Printer et navn og navnets "type" - En funktion
console.log("\n");
console.log("## 2 ##");
console.log(add);

// What will it print
//Printer de 2 første argumenter der er plads til
console.log("\n");
console.log("## 3 ##");
console.log(add(5, 2, 3));

// What will it print     
// Printer "NaN" = Not a number fordi parameter 2 ikke er initialiseret. Man kan ikke addere med "Ingenting".
console.log("\n");
console.log("## 4 ##");
console.log(add(1));

// What will it print
// Bruger funktionen callback til at printe regnestykket og kalder derefter en funktion i funktionen.
console.log("\n");
console.log("## 5 ##");
console.log(cb(3, 3, add));

// What will it print
// Printer korrekt resultat efter sub funktionen men bruger cb funktionens tekst med "+"
console.log("\n");
console.log("## 6 ##");
console.log(cb(4, 3, sub));

// What will it print (and what was the problem)
// Vi forsøger at bruge add som en funktion når den i forvejen bliver anvendt som callback
console.log("\n");
console.log("## 7 ##");
try {
    console.log(cb(3, 3, add()));
} catch (e) {
    if (e instanceof TypeError) {
        console.error(e.name + ': ' + e.message)
    }
}


//What will it print
// En konkatenation af 3 og hh = "3hh"
console.log("\n");
console.log("## 8 ##");
console.log(cb(3, "hh", add));

var mul = function (n1, n2) {
    return n1 * n2;
}

var cb2 = function (n1, n2, callback) {
    if (typeof n1 !== "number") {
        console.log("Expected a function but got: " + n1);
    }
    if (typeof n2 !== "number") {
        console.log("Expected a function but got: " + n2);
    }
    if (typeof callback !== "function") {
        console.log("Expected a function but got: " + callback);
    }
    return "Result from the two numbers: " + n1 + " + " + n2 + " + " + n1 + " * " + n2 + " = " + (n1 + n2 + callback(n1, n2));
};

console.log("\n");
console.log("## 8.4 ##");
console.log(cb2(2, 2, mul));

var div = function (n1, n2) {
    return n1 / n2;
};

console.log("\n");
console.log("## 8.5 ##");
console.log(cb(8, 2, div));







