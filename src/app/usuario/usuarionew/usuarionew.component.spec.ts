import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarionewComponent } from './usuarionew.component';

describe('UsuarionewComponent', () => {
  let component: UsuarionewComponent;
  let fixture: ComponentFixture<UsuarionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
