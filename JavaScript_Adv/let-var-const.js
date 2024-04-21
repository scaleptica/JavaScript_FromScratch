// function abcd(){
//     for(var i = 0; i < 12; i++){
//         console.log(i);
//     }
//     console.log(i);                   //           =>       var is function scoped
//     console.log(i);
//     console.log(i);
// }

// abcd();

/*--------------------------------------------------------- */

// function abcd(){
//     for(let i = 0; i < 12; i++){
//         console.log(i);
//     }
//     console.log(i);                   //           =>       let is braces scoped
//     console.log(i);
//     console.log(i);
// }

// abcd();

/*--------------------------------------------------------- */

var a = 12; // var becomes a window object

let b = 13; // let does not become a window object