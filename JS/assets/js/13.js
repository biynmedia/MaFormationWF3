/* -------------------------------
   LA MANIPULATION DES CONTENUS
-------------------------------- */

function l(e) {
    console.log(e);
}

// -- Je souhaite récupérer mon lien ; comment procéder ?
var google = document.getElementById("google");
l(google)

// -- Maintenant, je souhaite accéder aux informations de ce lien, par exemple :

    // -- A : Le lien vers lequel pointe la balise
    l("Le lien vers lequel pointe la balise :")
    l(google.href);

    // -- B : L'ID de la balise
    l("L'ID de la balise :")
    l(google.id);

    // -- C : La Classe de la balise
    l("La Classe de la balise :")
    l(google.className);

    // -- D : Le Texte de la Balise (l'élément)
    l('Le Texte de la Balise');
    l(google.textContent)

// -- Maintenant,je souhaite modifier le contenu de mon lien
// -- Comme une variable classique, je vais simplement venir affecter une nouvelle valeur.
google.textContent = "Mon lien vers Google !";

/* -------------------------------
   AJOUTER UN ELEMENT DANS MA PAGE
-------------------------------- */

// -- Nous allons utiliser 2 méthodes :

    // -- 1 : La fonction document.createELement() va permettre de générer un nouvel élément dans le DOM ; que je pourrais par la suite modifier avec les méthodes que nous venons de voir.

    // PS : Ce nouvel élément est placé en mémoire.

    // -- Définition de mon élément
    var span = document.createElement("span");

    // -- Si je souhaite lui donner un ID
    span.id = "MonSpan";

    // -- Si je souhaite lui attribuer du contenu...
    span.textContent = "Mon Beau Texte en JS";

// -- 2 : La fonction appendChild() va me permettre de rajouter un enfant à un élément du DOM.
google.appendChild(span);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

// -- Création de la balise h1
var h1 = document.createElement("h1");

// -- Création de la balise a
var a = document.createElement("a");

// -- Je vais donner un titre à mon lien
a.textContent = "Titre de mon Article";

// -- Je veux donner un lien à mon lien :
a.href = "#";

// -- appendChild()

    // -- Je met mon lien (a) dans mon h1
    h1.appendChild(a);

    // -- Je met mon h1 dans ma page, dans mon body
    document.body.appendChild(h1);

// -- Correction du BONUS

    // -- Je veux que mon lien soit de couleur rouge
    a.style.color = "red";

    // -- Je veux que mon lien ne soit pas souligné
    a.style.textDecoration = "none";