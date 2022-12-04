let celcius= document.getElementById("celcius");
let fahrenheit=document.getElementById("fahrenheit");

function celtofar(){
    let output = (parseFloat(celcius.value)*9/5)+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
    console.log(output);
}

function fartocell(){
    let output1=(parseFloat(fahrenheit.value)*5/9)-32;
    celcius.value=parseFloat(output1.toFixed(2));
}