    /*------------------------------------------------- 
    |~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ LE DOM ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ |
    | ------------------------------------------------- |                          |                                                   |
    |   Le DOM, est une interface de développement      |
    |   en JS pour HTML. Grâce au DOM, je vais être     |
    |   en mesure d'accéder / modifier mon HTML.        |
    |                                                   |
    |   L'Objet "document" : c'est le point d'entrée    |
    |   vers mon contenu HTML !                         |
    |                                                   |
    |   Chaque page chargée dans mon navigateur à un    |
    |   objet "document".                               |
    |--------------------------------------------------*/

    // -- Comment puis-je faire pour récuprer les différentes informations de ma page HTML ?

/*------------------------------------------------- 
|~ ~ ~ ~ ~ ~ document.getElementById  ~ ~ ~ ~ ~ ~ |
| ----------------------------------------------- |
|   document.getElementById() : C'est une         |
|   fonction qui va permettre de récupérer un     |
|   élément HTML à partir de son identifiant      |
|   unique : ID.                                  |
|________________________________________________*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour);

/*------------------------------------------------- 
|  ~ ~ ~ document.getElementsByClassName   ~ ~ ~  |
| ----------------------------------------------- |
|   document.getElementsByClassName() : C'est une |
|   fonction qui va permettre de récupérer un ou  |
|   plusieurs éléments (une liste) HTML à partir  |
|   de leur classe.                               |
|________________________________________________*/

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);

// -- Me renvoi : Un tableau JS avec mes éléments HTML, ou encore autrement dit, 
// une Collection d'éléments HTML.

/*------------------------------------------------- 
|  ~ ~ ~ ~ document.getElementsByTagName  ~ ~ ~ ~ |
| ----------------------------------------------- |
|   document.getElementsByTagName() : C'est une   |
|   fonction qui va permettre de récupérer un ou  |
|   plusieurs éléments (une liste) HTML à partir  |
|   de leur * nom de balise *                     |
|________________________________________________*/

var span = document.getElementsByTagName("span");
console.log(span);