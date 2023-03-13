function createDictionary(a, b) { //créer la fonction dictionnaire qui prend un param a et un b
    let dictionary = {}; // définir une variable dictionnaire vide 
    for (let i = 0; i < a.length; i++) { //créer une boucle for qui parcourt a avec incrémentation
      dictionary[a[i]] = b[i]; // assigner la valeur de index a à index b dans le dictionnaire
    }
    return dictionary;
  }
  
  let a = ["Malena", "Fanny", "Pistache", "Aliha"];
  let b = ["coloc 1", "coloc 2", "chat", "coloc 3"];
  
  console.log(createDictionary(a, b));