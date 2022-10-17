import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityNewModalComponent } from './facility-new-modal.component';

describe('FacilityNewModalComponent', () => {
  let component: FacilityNewModalComponent;
  let fixture: ComponentFixture<FacilityNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
