import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminDocenteComponent } from './home-admin-docente.component';

describe('HomeAdminDocenteComponent', () => {
  let component: HomeAdminDocenteComponent;
  let fixture: ComponentFixture<HomeAdminDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdminDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
