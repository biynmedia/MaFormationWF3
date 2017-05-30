/* ------------------------------- 
        LES EVENEMENTS
---------------------------------

Les évènements, vont me permettre de déclencher
une fonction, c'est à dire : une série d'instructions,
suite à une action de mon utilisateur.

OBJECTIF : Etre en mesure de capturer ces évènements,
afin d'executer une fonction.

Les Evenements : MOUSE (Souris)

    click       : au clic sur un élément,
    mouseenter  : la souris passe au dessus de la zone qu'occupe un élément
    mouseleave  : la souris sort de cette zone

Les Evenements : KEYBOARD (Clavier)

    keydown : une touche du clavier est enfoncée
    keyup   : une touche a été relachée

Les Evenements : WINDOW (Fenetre)

    scroll : defilement de la fenetre
    resize : redimensionnement de la fenetre

Les Evenements : FORM (Formulaire)

    change : pour les éléments <input>, <select> et <textarea>
    submit : à l'envoi (soumission) d'un formulaire

Les Evènements : DOCUMENT

    DOMContentLoaded : Executé lorsque le document HTML est complètement chargé,
    sans attendre le CSS et les images.

-------------------------------
    LES ECOUTEURS D'EVENEMENTS
-------------------------------- 

Pour attacher un évènement à un élément, ou autrement dit, 
pour déclarer un écouteur d'évènement qui se chargera de lancer
un action, c'est à dire une fonction pour un évènement donné,
je vais utiliser la syntaxe suivante :

*/

var p = document.getElementById("MonParagraphe");
console.log(p);

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris.

    // -- 1 : Je défini une fonction chargée d'executer cette action.
    function changeColorToRed() {
        p.style.color = "red";
    }

    // -- 2 : Je déclare un écouteur qui se chargera d'appeler la fonction
    // au déclenchement de l'évènement.
    p.addEventListener("click", changeColorToRed);

/* -------------------------------
        EXERCICE PRATIQUE
A l'aide de javascript, créez un champ "input" type text avec un ID unique.
Affichez ensuite dans une alerte, la saisie de l'utilisateur.
-------------------------------- */

// -- Création du Champ input
var input = document.createElement('input');

// -- Attribution d'un Attribut
input.setAttribute('type','text');
input.setAttribute('placeholder','Saisissez un contenu...');

// -- Attribution d'un ID
input.id = "MonInput";

// -- Ajout de l'élément dans la page
document.body.appendChild(input);

// ------------------

// -- Création d'un écouteur
input.addEventListener("change", voirLaSaisieDeMonInput);

function voirLaSaisieDeMonInput() {
    alert(input.value);
}