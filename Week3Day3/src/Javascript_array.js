//Lav noget plads i terminalen...
for (var i = 0, max = 200; i < max; i++) {
    console.log("\n");
}

//EX a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//EX b
console.log("\n");
console.log("#########################");
console.log("EX b");
console.log("#########################");
var arrayAll = boys.concat(girls);
console.log(arrayAll);

//EX c
console.log("\n");
console.log("#########################");
console.log("EX c");
console.log("#########################");
var allStringComma = arrayAll.join(",");
var allStringDash = arrayAll.join("-");
console.log(allStringComma);
console.log(allStringDash);

//EX d & e
console.log("\n");
console.log("#########################");
console.log("EX d & e");
console.log("#########################");
arrayAll.push("Lone", "Gitte");
arrayAll.unshift("Hans", "Kurt");
console.log(arrayAll);

//EX f & g
console.log("\n");
console.log("#########################");
console.log("EX f & g");
console.log("#########################");
arrayAll.shift();
arrayAll.pop();
console.log(arrayAll);

//EX h
console.log("\n");
console.log("#########################");
console.log("EX h");
console.log("#########################");
arrayAll.splice(3, 2, "", "");
console.log(arrayAll);

//EX i
console.log("\n");
console.log("#########################");
console.log("EX i");
console.log("#########################");
arrayAll.reverse();
console.log(arrayAll);

//EX j
console.log("\n");
console.log("#########################");
console.log("EX j");
console.log("#########################");
arrayAll.sort();
console.log(arrayAll);

//EX k
console.log("\n");
console.log("#########################");
console.log("EX k");
console.log("#########################");
arrayAll.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b)
        return 0;
    if (a > b)
        return 1;
    return -1;
});
console.log(arrayAll);

//EX L
console.log("\n");
console.log("#########################");
console.log("EX L");
console.log("#########################");
var lowerCaseArrayAll = arrayAll.map(arr => arr.toUpperCase());
console.log(lowerCaseArrayAll);

//EX m
console.log("\n");
console.log("#########################");
console.log("EX m");
console.log("#########################");
var returnByFirstLetter = arrayAll.filter(name => name[0] === "l" || name[0] === "L");
console.log(returnByFirstLetter);

