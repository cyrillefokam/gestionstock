import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellUtilisateurComponent } from './nouvell-utilisateur.component';

describe('NouvellUtilisateurComponent', () => {
  let component: NouvellUtilisateurComponent;
  let fixture: ComponentFixture<NouvellUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvellUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
