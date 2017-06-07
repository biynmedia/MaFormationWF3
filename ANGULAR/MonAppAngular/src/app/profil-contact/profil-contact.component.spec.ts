import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilContactComponent } from './profil-contact.component';

describe('ProfilContactComponent', () => {
  let component: ProfilContactComponent;
  let fixture: ComponentFixture<ProfilContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
