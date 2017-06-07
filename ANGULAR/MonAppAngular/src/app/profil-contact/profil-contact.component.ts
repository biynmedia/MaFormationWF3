import { Component, Input } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-profil-contact',
  templateUrl: './profil-contact.component.html',
  styleUrls: ['./profil-contact.component.css']
})
export class ProfilContactComponent {
  @Input() contact: Contact;
}