// premitive
// 7 types  : String, Number, Boolean, null, undefined, symbol, BigInt

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id===anotherId);


// non premitive or reference type, can allocate referance in memory
// Arrays, objects, Functions
//arrays, objects, functions dataTypes is always "Functions" but the Function return is Functions

const heros = ["imranKhan","tariqMasood","muftiYasirNadeem"]

let myObj = {
    name: "salman",
    age : 32,}

let myFunction = function(){
    console.log("hello wolrd");
    
}
console.log(typeof id);