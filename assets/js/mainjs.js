

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let colore = document.getElementById("colore").value;
    let data = document.getElementById("data").value;
    
    let anni = 2023 - data; 

    let passwordGenerata = nome + cognome + anni + colore;
    let passwordGenerata2 = nome.substring(2, 5) + anni + cognome.substring(1, 4) + colore.substring(0, 3);
    
    console.log(passwordGenerata);
    console.log(passwordGenerata2);


    document.getElementById('passwordGenerata').innerText = "La tua password poco sicura :" + " " + passwordGenerata;
    document.getElementById('passwordGenerata2').innerText ="La tua password molto sicura sicura :" + " " + passwordGenerata2;

    

});