/* ---------------------
  LES SELECTEURS jQUERY
---------------------- */

// -- Format : $('selecteur')
// -- En jQuery, tous les sélecteurs CSS sont disponibles...

// -- DOM READY !
$(function() {

    // lesFlemards.js
    function l(e) {
        console.log(e);
    }

    // -- Sélectionner les balises SPAN :
    
        // Version en Javascript :
        l('SPAN en JS :');
        l(document.getElementsByTagName('span'));

        // Version jQuery
        l('SPAN en JQ :');
        l($("span"));

    // -- Sélectionner mon Menu

        // -- Version en Javascript :
        l("ID via JS :");
        l(document.getElementById("menu"));

         // -- Version jQuery
        l('ID via jQuery');
        l($("#menu"));

    // -- Sélectionner une Classe
        
        // -- Version Javascript
        l('Classe via JS :')
        l(document.getElementsByClassName('MaClasse'))
        
        // -- Version jQuery
        l('Classe via jQuery')
        l($('.MaClasse'))

        // -- Sélectionner par Attribut
        
        l('Par Attribut :')
        l($("[href='http://www.google.fr']"))
});