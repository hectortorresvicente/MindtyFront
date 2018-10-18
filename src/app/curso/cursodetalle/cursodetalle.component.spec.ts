import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodetalleComponent } from './cursodetalle.component';

describe('CursodetalleComponent', () => {
  let component: CursodetalleComponent;
  let fixture: ComponentFixture<CursodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
