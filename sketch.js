//changer la valeur de display #slogan
// let sloganTime = document.getElementById("slogan");
//
// function sloganDisplay(){
//     sloganTime.style.display = "block";
//     //console.log("je suis dans sloganDisplay");
// }
// setTimeout(sloganDisplay, 2000);
//console.log("ici setTimeout");

//apparition des bras dans la div #armAppear
let armAppear = document.getElementById("armAppear");
function randomMax(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function armDisplay(){
    armAppear.innerHTML += '<img src="bras.svg" style="margin-left:'+ randomMax(50) +'px"/>'
}
setTimeout(armDisplay,3500);
setInterval(armDisplay, 1000);
