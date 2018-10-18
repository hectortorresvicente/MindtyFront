import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulonewComponent } from './modulonew.component';

describe('ModulonewComponent', () => {
  let component: ModulonewComponent;
  let fixture: ComponentFixture<ModulonewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulonewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
