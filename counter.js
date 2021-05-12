//set value variable
let v = 0

//add function; value to green/red
const add = function(valueToAdd) {
    v += valueToAdd;
    document.getElementById("value").innerHTML = v;
        if (v > 0) {
            document.getElementById("value").style.color = 'green';
        } else if (v < 0) {
            document.getElementById("value").style.color = 'red';
        } 
}

//subtract function; value to green/red
const subtract = function(valueToSubtract) {
    v -= valueToSubtract;
    document.getElementById("value").innerHTML = v;
    if (v > 0) {
        document.getElementById("value").style.color = 'green';
    } else if (v < 0) {
        document.getElementById("value").style.color = 'red';
    } 
}

//reset function; value to 'black'
const reset = function() {
    v = 0;
    document.getElementById("value").innerHTML = 0;
    document.getElementById("value").style.color = 'black';
}

//connect buttons

const addBtn = document.querySelector("#increase");
const subtractBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

//& have them call the value change functions

addBtn.addEventListener("click", function(){
    add(1);
})

subtractBtn.addEventListener("click", function(){
    subtract(1);
})

resetBtn.addEventListener("click", function(){
    reset();
})