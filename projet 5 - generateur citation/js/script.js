// premier tableau de morceau de phrases "FAMILLE"

const sujet1 = ["Je", "Elle", "Valérie Damido", "Suzie", "Le chat"];
const verbe1 = ["fouette", "cuit", "maroufle", "renifle", "boulverse"];
const complement1 = ["ma soeur.", "ta tante.", "un cousin germain quelconque.", "le fils du facteur.", "Félicie aussi."];

// second tableau de morceau de phrases "LA FONTAINE"

const sujet2 = ["Martine", "Elle", "Mais toi tu", "Trump", "Encore le chat"];
const verbe2 = ["abat", "gobe", "vaporise", "arrache", "mange"];
const complement2 = ["le corbeau.", "les pattes de la sauterelle.", "une soupe de tortue.", "avec le rat des villes.", "encore a Trévise."];



// GENERATION CITATION 

// fonction permettant de générer aléatoirement un entier dans uun intervale donné.
function generationAleatoire(min, max) {
    min = Math.ceil(min); //retourne le plus petit entier superieur ou égale au nombre donné en paramètre.
    max = Math.floor(max); // retourne la valeur arrondie à l'inferieur du nombre donné en paramètre
    return Math.floor(Math.random() * (max - min + 1)) + min; // on ajoute +1 pour que la valeur max soit celle que l'on a mit en parametre et non l'entier inférieur.
}



//---fonction permettant de selectionner les valeurs dans les tableaux en fonction de "generationAleatoire"

function selectionMotTableau(tableau) {
    let nombreGenereAleatoire = generationAleatoire(0, (tableau.length - 1));
    return tableau[nombreGenereAleatoire];
}

// concaténation avec des fonctions fléchées

let phraseGenereeThemeFamille = () => `${selectionMotTableau(sujet1)} ${selectionMotTableau(verbe1)} ${selectionMotTableau(complement1)}`;

let phraseGenereeThemeLaFontaine = () => `${selectionMotTableau(sujet2)} ${selectionMotTableau(verbe2)} ${selectionMotTableau(complement2)}`;



//------------fonction génératrice--------------------



function generationCitation(choixTheme, choixNombre) {

    choixTheme = choixTheme == null ? Math.floor(Number(prompt("Pour le theme FAMILLE, tapez 1. pour le thème LA FONTAINE, tapez 2."))) : choixTheme;

    choixNombre = choixNombre == null ? Math.floor(Number(prompt("Combien de phrases souhaitez vous?"))) : choixNombre;  
    
        
    // algèbre de bool
    if ((choixTheme !== 1) && (choixTheme !== 2)) {
        alert("Je n'ai pas compris votre demande");
        return generationCitation();
    }
    //operateur ternaire
    const themeAGenere = choixTheme === 1 ? phraseGenereeThemeFamille : phraseGenereeThemeLaFontaine;

   
    for (let i = 0; i < choixNombre; i++) {
        console.log("Voici votre commande:")
        console.log(themeAGenere());
    }
    
    menu(choixTheme, choixNombre);
    
}


/*
---------fonction de choix "menu"-------------------

    - 1: permet de repartir au début et de refaire les choix de thème + nbr de génération (ok)
    - 2: génère a nouveau les citations en gardant les paramètres (en court)
    - 3: arrêt du programme(ok)
*/
function menu(choixTheme, choixNombre) {
    
    let result = "";
    choixMenu = prompt("Si vous voulez recommencer du début, tapez 1. ou 2 Pour nous quitter, tapez 3. ");//Pour simplement générer de nouvelles phrases, tapez 2.//
    choixMenuNombre = Math.floor(Number(choixMenu));

    if (choixMenuNombre === 1) {
        result = generationCitation();
    }
    
    else if (choixMenuNombre === 2){
        result = generationCitation(choixTheme, choixNombre);
    }
    /*choix 2:  je veux créer une variable qui va récupérer les paramètres de "generationCitation" et qui va juste refaire la partie"themeAGenere" et boucle .... 

    * test avec un objet: ca veut pas sortir du scope (je ne sais pas comment faire).
    * test avec un retour de valeur de la fonction menu() en y incluant les paramètres dans la fonction: ca marche pas. 
    * test deux ou trois autrezs trucs hasardeux sans trop savoir ce qu'il fait... ça marche pas!   
    
    *ragequit, casse un truc, revient* "PK CA MARCHE PAAAAAASSSSSSS!!!!!!!!!!!!!""
    */   
    
    else if (choixMenuNombre === 3) {
        alert("Merci d'avoir joué ^^");
    }

    else {
        alert("Je n'ai pas compris votre demande")
        result = menu();
    }


    return result;
}


// ----------------------------interactivté user-----------------------------------------

alert("Bonjour et bienvenue dans le blablatorion 3eme du nom.");
alert("Nous vous proposons de generer aléatoirement des phrases en fonctions de 2 thèmes précis.");
generationCitation();
