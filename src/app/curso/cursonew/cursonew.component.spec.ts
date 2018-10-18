import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursonewComponent } from './cursonew.component';

describe('CursonewComponent', () => {
  let component: CursonewComponent;
  let fixture: ComponentFixture<CursonewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursonewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
