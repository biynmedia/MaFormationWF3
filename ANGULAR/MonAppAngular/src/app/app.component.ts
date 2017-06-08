// -- 1. Importation de la Librairie Angular Core
import { Component } from '@angular/core';
import { Contact } from './shared/models/contact';

// -- 2. Déclaration du Composant
@Component({
  
  // -- 2.a : Le sélecteur pour le rendu dans l'application
  selector: 'app-root',

  // -- 2.b : Le contenu HTML de notre composant
  templateUrl: './app.component.html',

  // -- 2.c : Les Styles CSS
  styleUrls: ['./app.component.css']
})

// -- Notre code JS
export class AppComponent {

  // -- Déclaration d'une variable title
  title: string = 'contacts';

  // -- Déclaration d'un Objet Contact
  Contact = {
    id       : 1,
    fullname : 'Hugo LIEGEARD',
    username : 'hugoliegeard'
  }

  // -- Je travail avec des Contacts
  contacts: Contact[] = [
    { id:1, fullname:'Hugo LIEGEARD', username:'hugoliegeard'},
    { id:2, fullname:'Tanguy MANAS', username:'tanguymanas'},
    { id:3, fullname:'Yimin JI', username:'yiminji'}
  ]

  // -- Choix de mon utilisateur actif
  contactActif: Contact;

  // -- Ma fonction choisir contact, prend un contact en paramètre, et le transmet a la variable contactActif
  choisirUnContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }

  // -- Si unContactEstCree j'apelle ma fonction ajouterContactDansListe
  ajouterContactDansListe(event) {
    // Aperçu dans la console
    console.log(event);

    // -- Insertion du Contact dans le tableau de contacts
    this.contacts.push(event.contact);

    // -- Insertion dans le localstorage, BDD, ...

  }

}
