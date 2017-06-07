// -- 1. Importation de la Librairie Angular Core
import { Component } from '@angular/core';

// -- 2. Déclaration du Composant
@Component({
  
  // -- 2.a : Le sélecteur pour le rendu dans l'application
  selector: 'app-root',

  // -- 2.b : Le contenu HTML de notre composant
  template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
           <a href="/" class="navbar-brand">Mes Contacts</a> 
        </div>
      </nav>
    </header>

    <div class="row">
      <div class="col-sm-4">

      <!-- *ngIf : Permet de faire le rendu HTML de la div, que si le tableau contacts contient des objets -->

        <div *ngIf="contacts">

            <ul class="list-group list-contacts">
              <li class="list-group-item" 
                *ngFor="let contact of contacts"
                (click)="choisirUnContact(contact)"
                [class.active]="contact === contactActif">
                  {{contact.fullname}}
              </li>
            </ul>

        </div> <!-- ./ IFcontacts -->

      </div> <!-- ./ col-sm-4 -->

      <div class="col-sm-8">

        <div class="jumbotron"
          *ngIf="contactActif">

          <!-- Avec l'expression {{ }} j'affiche le contenu de la variable dans l'application -->

          <h2>
            {{contactActif.fullname}}
            <small>{{contactActif.username}}</small>
          </h2>

        </div> <!-- ./ jumbotron -->

        <div class="jumbotron"
          *ngIf="!contactActif">

          <span class="glyphicon glyphicon-hand-left"></span>
          <h2>Bienvenue, choisis un contact</h2>

        </div> <!-- ./ jumbotron -->

      </div> <!-- ./ col-sm-8 -->

    </div> <!-- ./ row -->

    <!-- <p>Bonjour {{Contact.fullname}} <i>({{Contact.username}})</i></p> -->

    <footer class="text-center">
      Copyright &copy; 2017
    </footer>
  `,

  // -- 2.c : Les Styles CSS
  styles: [` 
      .list-contacts li {
        cursor:pointer;
      }
      .jumbotron .glyphicon {
        font-size : 80px;
      }
  `]
})

// -- Notre code JS
export class AppComponent {
  // -- Déclaration d'une variable title
  title = 'contacts';

  // -- Déclaration d'un Objet Contact
  Contact = {
    id       : 1,
    fullname : 'Hugo LIEGEARD',
    username : 'hugoliegeard'
  }

  // -- Je travail avec des Contacts
  contacts = [
    { id:1, fullname:'Hugo LIEGEARD', username:'hugoliegeard'},
    { id:2, fullname:'Tanguy MANAS', username:'tanguymanas'},
    { id:3, fullname:'Yimin JI', username:'yiminji'}
  ]

  // -- Choix de mon utilisateur actif
  contactActif;

  // -- Ma fonction choisir contact, prend un contact en paramètre, et le transmet a la variable contactActif
  choisirUnContact(contact) {
    this.contactActif = contact;
    console.log(this.contactActif);
  }

}
