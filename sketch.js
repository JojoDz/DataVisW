let sloganTime =  document.getElementById("slogan");

function sloganDisplay(){
    sloganTime.visibility = "visible";
    console.log("je suis dans sloganDisplay");
}
setTimeout(sloganDisplay(), 10000);
console.log("ici setTimeout");





// var x = document.getElementById("txt");
// setTimeout(function(){ x.value = "2 seconds" }, 2000);
// setTimeout(function(){ x.value = "4 seconds" }, 4000);
// setTimeout(function(){ x.value = "6 seconds" }, 6000);