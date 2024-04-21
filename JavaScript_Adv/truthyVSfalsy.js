//Falsy values => 0, false, undefined, null, NaN, document.all
//Truthy values => All values not present in the above list of "falsy values"

if(-1){
    console.log("-1 is considered true");
}else{
    console.log("-1 is considered false");
}


if("Ramesh"){
    console.log("The string 'Ramesh' is considered true");
}else{
    console.log("The string 'Ramesh' is considered false");
}


if(0){
    console.log("0 is considered true");
}else{
    console.log("0 is considered false");
}

if(document.all){
    console.log("document.all is considered true");
}else{
    console.log("document.all is considered false");
}