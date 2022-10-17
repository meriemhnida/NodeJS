/*function FonctionSimple(successCallback, failureCallback){
  if (Math.random() > 0.5) {
    successCallback("Réussite");
  } else {
    failureCallback("Échec");
  }
}
function successCallback(résultat) {
  console.log("L'opération a réussi avec le message : " + résultat);
}
function failureCallback(erreur) {
  console.error("L'opération a échoué avec le message : " + erreur);
}
FonctionSimple(successCallback, failureCallback);
*/


/*function FonctionSimple() {
  return new Promise((resolve, reject) => {
    if (Math.random() > .5) {
     resolve()
    } else {
      reject()
    }
  })
}

//    Appeler une promesse- méthode 1
/*FonctionSimple().then(()=>{
  console.log("L'opération a réussi");
}, ()=>
 {
  console.error("L'opération a échoué");
});*/
//    Appeler une promesse- méthode 2
/*FonctionSimple().then(function () {
  console.log("L'opération a réussi");
})
.catch(function () {
  console.log("L'opération a échoué");
});*/



