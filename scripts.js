const submitButton = document.getElementById("submitButton");
const containerOne = document.getElementById("con-one");
const containerTwo = document.getElementById("con-two");
const number = document.getElementById("rate-nums");
const result = document.getElementById("result");
containerOne.style.display = "flex";
containerTwo.style.display = "none";

function showConTwo() {
    containerOne.style.display = "none";
    containerTwo.style.display = "flex";
    var radios = document.getElementsByName("RD");
    var numberOfRadios = radios.length;

    for(i = 0; i <= numberOfRadios; i++){
        if(radios[i].checked){
            number.innerHTML = radios[i].value;
            result.innerHTML = "You selected " + number.innerHTML + " out of 5";
        }
    }
}
