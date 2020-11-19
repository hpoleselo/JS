/* Before jumping into NodeJS, learning the basics of JS, which is the syntax and the browser-oriented programming
i.e: to give our website a behaviour, I think it's good to cover the basics with vanilla itself so we can then
later differ one from another and know what is pure JS and what is not. */

// Declaring variables, in this case, global scope.
var x,y;
var string;

function sum (x,y) {
    return x + y;
}

function returnString (strng){
    return strng
}

/* From what I've seen it's not normal to have a main function (0not a practice) in JS, but I'm using it anyway in this case just for test.
Open Chrome/Mozilla up and check on the console tab under Development Tools (Inspector) and you will see the outputs from this function */
function main() {
    x = 5;
    y = 5;
    strng = "Surfing is magic";
    console.log("Sum is: " + sum(x,y));
    console.log("String is: " + returnString(strng));
}

main()


function testingOperators() {
    /* In JS there are 3 operators: =, == and ===
   Where = means attributing a value
   Where == means validation
   Where ==== means value and ...

   Check the example below
    */
   var string1 = "Surfing";

   /* Objects are variables too! But they can contain many values, like dictionary in Python. Key-pair values...
   And like Python (as POO), an object has methods (functions)
   {} represents an object in JS, like in Python!  */
   var henrique = {hobby: "Surfing"};
   if (string1 == henrique) {
       console.log("Content from both variables are equal");
   }

   else if (string1 === henrique) {
       console.log("I don't know");
   }

}

function aboutECS() {
    /* ECMAScript = ECS is the standardization of */

}


function aboutArrowFunctions() {

}


testingOperators()