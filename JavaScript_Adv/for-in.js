var obj = {
    name : "Ramesh",
    age : 22,
    city : "Bhopal"
};

for(var key in obj){
    console.log(key);
}

for(var key in obj){
    console.log(obj[key]);
}

for(var key in obj){
    console.log(key, obj[key]);
}