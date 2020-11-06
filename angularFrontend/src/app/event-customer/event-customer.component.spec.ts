import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCustomerComponent } from './event-customer.component';

describe('EventCustomerComponent', () => {
  let component: EventCustomerComponent;
  let fixture: ComponentFixture<EventCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
