var fs = require('fs');
fs.readFile('file.txt', function (erreur, donnees) {
 if (erreur) throw erreur;
 console.log(donnees.toString("utf8"));
 //instructions
 console.log('Les instructions mises à cet endroit sont obligées d\'attendre que le fichier soit lu en entier');
});
console.log('en attendant la lecture du fichier...');
