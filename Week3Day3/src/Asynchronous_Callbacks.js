//Make space in term
for (var i = 0; i < 200; i++) {
    console.log("\n");
}

////1
//var msgPrinter = function (msg, delay) {
//    setTimeout(function () {
//        console.log(msg);
//    }, delay);
//};
//console.log("aaaaaaaaaa");      //Displays #1
//msgPrinter("bbbbbbbbbb", 2000); //Displays #5
//console.log("dddddddddd");      //Displays #2
//msgPrinter("eeeeeeeeee", 1000); //Displays #4
//console.log("ffffffffff");      //Displays #3

function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this
    }, 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Explain this

/* 
 * Person (function) is called with parameter Kurt Wonnegut at runtime which is why it displays right away.
 * We have not declared a new person and stored one in a var which is why "name" is not attached to anything on the next line
 * 
 * You should only capitalise the first character of the name of a function when you need to construct the object by "new" keyword.
 * This is called "the Constructor Invocation Pattern", a way to inherits.
  */
