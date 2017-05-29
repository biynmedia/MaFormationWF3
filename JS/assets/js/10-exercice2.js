/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// -- Petite fonction de raccourci (lesflemards.js)

function w(t) {
    document.write(t);
}

function l(e) {
    console.log(e);
}

// -- 1. Création de notre Tableau 3D en JS !

var PremierTrimestre = [
    {
        "nom"       :   "LIEGEARD",
        "prenom"    :   "Hugo",
        "moyenne"   :   {
                            "francais" : 4,
                            "math"     : 8,
                            "physique" : 18
                        }
    },
    {
        "nom"       :   "MANAS",
        "prenom"    :   "Tanguy",
        "moyenne"   :   {
                            "francais" : 6,
                            "math"     : 15,
                            "physique" : 9,
                            "anglais"  : 15.5
                        }
    },
    {
        "nom"       :   "ARAUJO",
        "prenom"    :   "Thiago",
        "moyenne"   :   {
                            "francais" : 10,
                            "math"     : 15,
                            "physique" : 16
                        }
    }
];

l(PremierTrimestre);

w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants.
for(i = 0 ; i < PremierTrimestre.length ; i++) {

    // -- On récupère l'Objet Etudiant de l'itération
    let Etudiant = PremierTrimestre[i];

    // -- Aperçu dans la console
    l(Etudiant);

    // -- Je défini NombreDeMatiere et la SommeDesNotes à 0;
    var NombreDeMatiere = 0, SommeDesNotes = 0;

    // -- Afficher le Prénom et le Nom d'un Etudiant
    w("<li>");
        w(Etudiant.prenom + " " + PremierTrimestre[i].nom);
        // -- Afficher la moyenne de l'Etudiant aux différentes matières.
        w("<ul>");
            for(let matiere in Etudiant.moyenne) {

                // l(matiere)
                // l(Etudiant.moyenne[matiere])
                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];
                
                w("<li>");
                    w(matiere + " : " + Etudiant.moyenne[matiere]);
                w("</li>");

            } // -- Fin de la Boucle Matière
            
            w("<li>");
                w("<strong>Moyenne Générale :</strong> " + (Math.round(SommeDesNotes / NombreDeMatiere)));
            w("</li>");

        w("</ul>");
    w("</li>");

} // -- Fin de la Boucle pour les Etudiants

w('</ol>');