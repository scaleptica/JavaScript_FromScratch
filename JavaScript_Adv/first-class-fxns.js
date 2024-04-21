var a = function(){
    console.log("This is a function");
};

function abcd(val){
    val();
}

abcd(a);

function def(val){
    val();
}

def(function(){console.log("This is also a function");});