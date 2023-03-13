liste = [55, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42];

for (let i = 0 ; i < liste.length ; i++){
    if (i[0] < i[1]){
        temp = i[1];
        i[0] = i[1];
        i[0] = temp;
    } else {}
}
console.log(liste);

// créer une boucle for qui passe en revue le contenu du tableau
// si la première valeur est plus grande que la 2ème, les inverser
// sinon, passer à la valeur suivante
