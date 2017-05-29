/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// 1 -- Initialisation des variables
var AnneeActuelle = new Date();

// 2 -- Création de ma fonction
function Hello() {

    // 2a. -- Je demande à l'utilisateur son Prénom
    let prenom = prompt("Hello ! What is your name ?","<Saisir votre Prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // 2b. -- Je lui demande son age
    let age = parseInt(prompt("Hello " + prenom + " ! How old are you ?","<Saisir votre Age>"));
    console.log(age);
    console.log(typeof age);

    // 2c. -- J'affiche une alert avec son année de naissance !
    alert("AMAZING ! So you were born in " + (AnneeActuelle.getFullYear() - age) + " !");

    // 2d. -- Affichage dans ma page HTML
    document.write("Hello " + prenom + " it's AMAZING ! you're " + age + " years old !");
}

// 3 -- Execution de ma Fonction
Hello();