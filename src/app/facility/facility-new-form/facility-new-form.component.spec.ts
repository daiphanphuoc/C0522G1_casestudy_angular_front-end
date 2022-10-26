import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityNewFormComponent } from './facility-new-form.component';

describe('FacilityNewFormComponent', () => {
  let component: FacilityNewFormComponent;
  let fixture: ComponentFixture<FacilityNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
