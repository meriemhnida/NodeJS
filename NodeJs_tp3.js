fs = require('fs');
fichierSource = process.argv[2]; 
fichierDestination = 'résultat.txt';

console.log(" Corrigé du TP3 \n")

//définition d'une fonction appelée func1
func1=() =>{ console.log("Hello form function 1") } 

//définition d'une fonction appelée func2
function func2(){ console.log("Hello form function 2") }

//Appel des fonctions func1() et func2()
func1() 
func2()
/*

console.log ("Exercice 2")

func1=(x) =>{
     return new Promise((resolve, reject) => {    
        if (x%2==0) resolve() 
        else reject() }); 
    }
    let x=3
    func1(3).then(()=>{ console.log(x+ " est un nombre pair"); },
    ()=>{ console.error(x+" est un nombre impair"); });

    let y=4
    func1(y).then(()=>console.log(y+"\t est un nombre pair")).catch(()=>console.log(y+"\t est un nombre impair"))

    let z=2
    func1(y).then(function x(){console.log(z+"\t est un nombre pair")}).catch(function y(){console.log(z+"\t est un nombre impair")})

*/
console.log("\n*****************Lecture synchrone d'un fichier en Node.js*****************\n")
/*

let contenu = fs.readFileSync(fichierSource);
contenu = contenu.toString().toLowerCase(); 
fs.writeFileSync(fichierDestination, contenu)
console.log("on est obligé d'attendre la fin de lecture du fichier pour passer à l'instruction suivante")
*/
console.log("\n*****************Lecture asynchrone d'un fichier en Node.js*****************\n")
console.log("\n------------------Exemple de Callback------------------\n")
/*
fs.readFile(fichierSource, (err, data) => {
    if (err) {
        console.error(err);
        }
    else
   contenu =data.toString().toLowerCase()
        fs.writeFile(fichierDestination, contenu, (err) => {
            if (err)
            console.error(err);
            else
            console.info("Opération d'écriture effectuée avec succès")
                });
            });

*/

console.log("\n------------------Exemple de Promesse------------------\n");
function LireFichier(fichierSource) {
    return new Promise((resolve, reject) => {
      fs.readFile(fichierSource, (err, data) => {
          if (err) {
          reject(err)
          }
          else
          {
          resolve(data)
          }
    });
  });
  }
  LireFichier("file.txt").then((data)=>{
    contenu =data.toString().toLowerCase()
    fs.writeFile(fichierDestination, contenu, (err) => {
     if (err)
     console.error(err);
         });
  }, ()=>
   {
    console.error("L'opération a échoué");
  });
  

  // avec Await et Async

  const fs = require('fs').promises;
      async function LireFichier()
      {
      try {
        const data = await fs.readFile('file.txt'); 
        contenu=data.toString().toLowerCase()
        return contenu

      } catch (error) {
        console.log(error)
      }
    }
    LireFichier()   
    

async function EcrireFichier()
      {
     try {
        let data= await LireFichier()
       
            await fs.writeFile('file1.txt', data); 
            } catch (error) {
            console.log(error)
          }
    
    }