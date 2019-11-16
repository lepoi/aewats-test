import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import AewaComponent from './aewa.component';

describe('AewaComponent', () => {
  let component: AewaComponent;
  let fixture: ComponentFixture<AewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
