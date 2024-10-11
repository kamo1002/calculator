
//declare variable
const textBox = document.getElementById("textBox");
const clear = document.getElementById("clear");
const cancel = document.getElementById("cancel");
function appendInput(input){
    textBox.value+=input;
}
 function calc(){

        textBox.value=eval(textBox.value);

 }
 clear.onclick = function Clear(){
    textBox.value = "";
 }
 cancel.onclick = function cancel(){

    textBox.value = textBox.value.slice(0,textBox.value.length -1);
 }