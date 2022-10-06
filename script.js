// Variables globales
// Elements mémoire et ecran
const memoireElt = document.getElementById("memoire");
const ecranElt = document.getElementById("ecran");

// On stocke la valeur de l'ecran " precedent"
let precedent = 0;

// On stock l'affichage
let affichage = "";

// On stocke l'operation
let operation = null;

// On initialise la memoire
let memoire;

window.onload = () => {
  // On ecoute les clics sur les touches
  let touches = document.querySelectorAll("span");

  for (let touche of touches) {
    touche.addEventListener("click", gererTouches);
  }
};

// Cette fonction réagit au clic sur les touches

function gererTouches() {
  let touche = this.innerText;
  // A verifier, pas plusieurs points dans la chaine
  // On verifie si c'est chiffre ou point
  if (parseFloat(touche) >= 0 || touche === ".") {
    // On met a jour la valeur d'affichage et on affiche sur l'ecran
    affichage =
      affichage === "" ? touche.toString() : affichage + touche.toString();
    ecranElt.innerText = affichage;
  } else {
    switch (touche) {
      //touche C reinitialise tout
      case "C":
        predecent = 0;
        affichage = "";
        operation = null;
        ecranElt.innerText = 0;
        break;
      //calculs
      case "+":
      case "-":
      case "*":
      case "/":
        break;
    }
  }
}
/* Effectue le calcul
@param {float} nb1
@param {float} nb2
@param {string} operation
*/
function calculer(nb1, nb2, operation) {
  nb1 = parseFloat(nb1);
  nb2 = parseFloat(nb2);
}
