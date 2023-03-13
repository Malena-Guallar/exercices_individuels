function askName(){
    let nom = prompt("Quel est ton nom ?")

    window.alert("👋 Bonjour " + nom);

    document.getElementById('Présentation').innerText += "Coucou " + nom + "!";
}
askName() ; 

function askBirthYear(){
let année = prompt("Quelle est ton année de naissance ?")

let currentYear = new Date().getFullYear();
let age = currentYear - (parseInt(année));
console.log(age); 

document.getElementById('Age').innerText += "Tu as " + age + " ans";
}
askBirthYear() ; 


