let myLabel = document.getElementById("myLabel");
let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
const random = Math.floor(Math.random() * 99) +1;
console.log(random);

myButton.onclick = function() {
    const numero = Number(myInput.value);

    if (numero == random) {
        myLabel.classList.remove('errado');
        myLabel.classList.add('acertado');
        myLabel.innerHTML = random;
    }
    else {
        myLabel.classList.add('errado');
        myLabel.innerHTML = numero;
    };
};






