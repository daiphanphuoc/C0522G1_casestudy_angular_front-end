import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFailModalComponent } from './message-fail-modal.component';

describe('MessageFailModalComponent', () => {
  let component: MessageFailModalComponent;
  let fixture: ComponentFixture<MessageFailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
