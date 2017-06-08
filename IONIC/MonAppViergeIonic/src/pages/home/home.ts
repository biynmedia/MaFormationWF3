import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {

  // -- Déclarations des variables
  mesArticles:any;
  monIP:any;

  // -- Le constructeur est appelé en premier au chargement du composant
  constructor(public navCtrl: NavController, private httpProvider:HttpProvider) {
    // une fois le composant chargé, j'appelle mes autres fonctions, pour récupérer les articles depuis API et l'adresse IP de l'utilisateur.
    this.getArticles();
    this.recupereIP();
  }

// -- Récupère depuis le httpProvider les Articles
  getArticles() {
    this.httpProvider.getArticles().subscribe(data => {
      this.mesArticles = data.data.results;
      console.log(this.mesArticles)
    })
  }

// -- Récupère depuis le httpProvider l'adresse IP
  recupereIP() {
    this.httpProvider.getIP().subscribe(result => {
      this.monIP = result.query + ' ' + result.city;
      console.log(result);
    })
  }

}
