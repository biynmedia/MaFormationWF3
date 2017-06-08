import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

// -- Permet de récupérer les articles du site depuis API format JSON
  getArticles() {
    return this.http.get('http://grandeecoledigital.fr/index.php?option=com_api&app=articles&resource=article&category_id=8&format=raw&key=771922d0011bfc9bde707bc59b3e2556').map(res => res.json());
  }

  getIP() {
    return this.http.get('http://ip-api.com/json').map(res => res.json())
  }

}
