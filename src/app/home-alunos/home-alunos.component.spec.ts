import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlunosComponent } from './home-alunos.component';

describe('HomeAlunosComponent', () => {
  let component: HomeAlunosComponent;
  let fixture: ComponentFixture<HomeAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
