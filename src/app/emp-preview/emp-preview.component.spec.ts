import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPreviewComponent } from './emp-preview.component';

describe('EmpPreviewComponent', () => {
  let component: EmpPreviewComponent;
  let fixture: ComponentFixture<EmpPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
