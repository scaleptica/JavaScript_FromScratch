var a = {}; //blank object

var a = {   //filled object
    age: 24,
    name: "Kartik",
    email: "email@mail.com",
    linkedIn: "Kartik Mathur",
    contact: 8934651245
};

// function clockSound(){
//     console.log("Tik Tok");
// }

var watch = {
    brand: "Kenneth Cole",          //property
    price: "16K",                   //   "
    color: "silver",                //property
    type: "automatic",              //   "
    digital: false,                 //   "
    sound: function clockSound(){   //method
        console.log("Tik Tok");
    }
};

console.log(watch.type);
console.log(watch.sound);

watch.brand = "Titan Kenneth Cole";