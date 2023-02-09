function askName(){
    let nom = prompt("Quel est ton nom ?")

    window.alert("👋 Bonjour " + nom);

    document.getElementById('Présentation').innerText += "Coucou " + nom + "!";
}
askName() ; 

function askBirthYear(){
    let année = prompt("Quelle est ton année de naissance ?")

    let age = 2023 - (parseInt(année));
    console.log(age); 

    document.getElementById('Age').innerText += "Tu as " + age + " ans.";
}
askBirthYear() ; 

// function askAge(){
//     let today = newDate(); 
//     let dateNaissance = prompt("Quel est ta date de naissance ?");
//     let année=dateNaissance.substring(6,4);
//     let mois=dateNaissance.substring(3,2);
//     let jour=dateNaissance.substring(0,2);

//     let dtn = newDate(année + "-" + mois + "-" + jour);

//     let age = today.getFullYear() - dtn.getFullYear();
//     let m = today.getMonth() - dtn.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < dtn.getDate())){
//         age = age - 1;
//     }
// }
// askAge()
