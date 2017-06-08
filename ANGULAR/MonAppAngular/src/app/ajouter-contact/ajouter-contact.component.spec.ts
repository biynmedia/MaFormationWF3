import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContactComponent } from './ajouter-contact.component';

describe('AjouterContactComponent', () => {
  let component: AjouterContactComponent;
  let fixture: ComponentFixture<AjouterContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
