/* -----------------------
  DISPONIBILITE DU DOM
-------------------------- */

/*
    A partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescence de ma page
    est complètement chargé, je peux commencer à utiliser jQuery.

    Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelé
    AUTOMATIQUEMENT par jQuery lorsque le DOM sera entièrement défini.

    3 façons de faire :
*/

jQuery(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 2ème possibilité
$(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 3ème possibilité, sans le (document).ready()
$(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
    // alert("J'ai 20 ans !");

    // -- En JS :
    document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon texte en JS</strong>";

    // -- En jQuery :
     $("#TexteEnJQuery").html("Mon Texte en JQ !");
});