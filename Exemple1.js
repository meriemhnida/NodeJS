/*var fs = require('fs');
fs.readFile('file.txt', function (erreur, donnees) {
 if (erreur) throw erreur;
 console.log(donnees.toString("utf8"));
});
console.log('en attendant la lecture du fichier...');
*/

content =fs.readFile('file.txt', (err, data) => {
    if (err !== null) {
    console.log(err);
    return;
    }
    else
    console.log("**"+data.toString());
    });

console.log("****"+content)