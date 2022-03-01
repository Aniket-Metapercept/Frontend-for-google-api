import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedDetailFormComponent } from './employeed-detail-form.component';

describe('EmployeedDetailFormComponent', () => {
  let component: EmployeedDetailFormComponent;
  let fixture: ComponentFixture<EmployeedDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
