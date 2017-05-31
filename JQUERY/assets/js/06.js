/* ------------------------------
  LES SELECTEURS D'ENFANTS jQUERY
------------------------------ */

// -- Initialisation de jQuery
$(function() {
    // -- Ici commence mon code jQuery
    // -- LesFlemards.js
    function l(e) {
        console.log(e);
    }

    // -- Je souhaite selectionner toutes mes divs
    l($('div'))

    // -- Je souhaite selectionner mon header
    l($('header'))

    // -- Je souhaite tous les éléments descendants direct (enfants) qui sont dans "header"
    l($('header').children())

    // -- Je souhaite parmi mes descendants directs, uniquements les éléments "ul"
    l($('header').children('ul'))

    // -- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('header').children('ul').find('li'))

    // -- Je souhaite récupérer uniquement le 2ème éléments de mes "li"
    l($('header').find('li').eq(1))

    // -- Je souhaite connaitre le voisin immediat de mon "header" ?
    l($('header').next())
    l($('header').next().next()) // -- Le voisin du voisin...
    l($('header').prev()) // -- Le voisin d'avant

    // -- LES PARENTS
    l($('header').parent())

});