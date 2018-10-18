import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulodetalleComponent } from './modulodetalle.component';

describe('ModulodetalleComponent', () => {
  let component: ModulodetalleComponent;
  let fixture: ComponentFixture<ModulodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
