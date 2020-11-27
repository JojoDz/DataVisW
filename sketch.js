//changer la valeur de display #slogan
let sloganTime = document.getElementById("slogan");

function sloganDisplay(){
    sloganTime.style.display = "block";
    //console.log("je suis dans sloganDisplay");
}
setTimeout(sloganDisplay, 5000);
//console.log("ici setTimeout");

//apparition des bras dans la div #armAppear
let armAppear = document.getElementById("armAppear");

function armDisplay(){
    armAppear.innerHTML +='<img src="bras.svg" style="margin-left:'+ Math.random(7000) +'"/>'
}
setInterval(armDisplay, 1000);
