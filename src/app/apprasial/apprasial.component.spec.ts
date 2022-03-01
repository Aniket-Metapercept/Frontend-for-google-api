import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprasialComponent } from './apprasial.component';

describe('ApprasialComponent', () => {
  let component: ApprasialComponent;
  let fixture: ComponentFixture<ApprasialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprasialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprasialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
