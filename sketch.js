var counter_list = [00,00000,00000];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("display_div_id");
function incrementCount(current_count){
  setInterval(function(){
    // clear count
    while (display_div.hasChildNodes()) {
        display_div.removeChild(display_div.lastChild);
    }
    str_counter_0+=7;
    if (str_counter_0 > 99) {
      str_counter_0 = 10; // reset count
      str_counter_1++;    // increase next count
    }
    if(str_counter_1>99999){
      str_counter_2++;
    }
    display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
    for (var i = 0; i < display_str.length; i++) {
      var new_span = document.createElement('span');
      new_span.className = 'num_tiles';
      new_span.innerText = display_str[i];
      display_div.appendChild(new_span);
    }
  },1000);
}

let armAppear = document.getElementById("armAppear");
function randomMax(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function armDisplay(){
    armAppear.innerHTML += '<img src="bras2.svg" style="margin-left:'+ randomMax(50) +'px; margin-top: '+ randomMax(50) + 'px; margin-right: '+ randomMax(50) +'px; margin-bottom: '+ randomMax(50) +'px; width: 3%"/>'
}
setTimeout(armDisplay,3500);
setInterval(armDisplay, 1000);
