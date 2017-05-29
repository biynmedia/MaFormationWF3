/* -------------------------------
          LES CONDITIONS 
-------------------------------- */

var MajoriteLegaleFR = 18;

if(16 > MajoriteLegaleFR) {
    alert("Bienvenu !");
} else {
    alert("Google...");
}

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

// 1 -- Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// 2 -- Créer une fonction pour demander son age
function verifierAge() {

    // -- METHODE 1 :
        // let age = prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>");
        // age = parseInt(age); // Conversion en Entier
        // return age;

    // -- METHODE 2 :
    // -- Demande l'age de mon visiteur puis je le retourne
        return parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));
        
}

// 3 -- Une Condition pour vérifier si l'age de l'utilisateur est supérieur à la MajoriteLegaleFR.
if(verifierAge() >= MajoriteLegaleFR) {
    // -- J'affiche un Message de Bienvenu
    alert("Bienvenu sur mon site internet pour les majeurs...");
} else {
    // -- J'affiche une Alerte
    alert("ATTENTION !!! Vous devez être majeur pour accéder à ce site !");

    // -- Je redirige vers Google.
    // document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

}

/* -------------------------------
  LES OPERATEURS DE COMPARAISON
-------------------------------- */

// -- L'Opérateur de Comparaison "==" signifie : Egal à ... 
// Il permet de vérifier que deux variables sont identiques.

// -- L'Opérateur de Comparaison "===" signifie : Strictement Egal à ... 
// Il va comparer la valeur et aussi le type de donnée.

// -- L'Opérateur de Comparaison "!=" signifie : Différent de

// -- L'Opérateur de Comparaison "!==" signifie : Strictement Différent de

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// 1 -- Demander son Email à l'utilisateur avec un prompt
var emailLogin = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");

// 2 -- Je vérifie si l'email saisie (emailLogin) correspond à celui en BDD (email)
if(emailLogin === email) {

    // 2a. Si tous est ok, je continu la vérification avec le mot de passe
    // 2a1. Demande a mon utilisateur son mot de passe via un PROMPT
    var mdpLogin = prompt("votre mot de passe ?","<Saisissez votre Mot de Passe>");

    if(mdpLogin === mdp) {
        alert("Bienvenu Utilisateur");
    } else {
        // 2a2. Si les MDPs ne correspondent pas, je lance une alerte
        alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
    }

} else {
    // 2b. Sinon, les emails ne correspondent pas, je lance une Alert...
    alert("ATTENTION, nous n'avons pas reconnu votre adresse email.");
}

// -- EXEMPLE AVEC LES FONCTIONS

function monUtilisateurEstCorrect(user, motdepasse) {
    if(user == email && motdepasse == mdp) {
        return true;
    } else {
        return false;
    }
}

var emailLogin = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
var mdpLogin = prompt("votre mot de passe ?","<Saisissez votre Mot de Passe>");

if(monUtilisateurEstCorrect(emailLogin,mdpLogin)) {
    alert ("Bienvenu");
} else {
    document.location.href = "http://www.google.fr";
}

/* -------------------------------
  LES OPERATEURS DE LOGIQUES
-------------------------------- */

// L'opérateur ET : && ou AND

// -- Si la combinaison EmailLogin et email correspond ET la combinaison mdpLogin et mdp correspond.

// -- Dans cette condition, les 2 doivent obligatoirement correspondre pour être validée.

if( (emailLogin === email) && (mdpLogin === mdp) ) { ... }

// -- L'opérateur OU : || ou OR

// -- Si la combinaison emailLogin et email correspond OU la combinaison mdpLogin et mdp correspond.

// -- Ici, dans cette condition, au moins l'une des deux doit correspondre pour être validée.

if( (emailLogin == email) || (mdpLogin == mdp) ) { ... }

// -- L'Opérateur "!" : qui signifie le CONTRAIRE de, ou encore NOT

var siMonUtilisateurEstApprouve = true;
if(!siMonUtilisateurEstApprouve) { // Si l'utilisateur n'est pas approuvé.
    
}
                                              
// -- Reviens également a écrire :
if(siMonUtilisateurEstApprouve == false) { }