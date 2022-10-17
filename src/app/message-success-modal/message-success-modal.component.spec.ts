import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccessModalComponent } from './message-success-modal.component';

describe('MessageSuccessModalComponent', () => {
  let component: MessageSuccessModalComponent;
  let fixture: ComponentFixture<MessageSuccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSuccessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
