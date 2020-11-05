import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmakeraccountComponent } from './eventmakeraccount.component';

describe('EventmakeraccountComponent', () => {
  let component: EventmakeraccountComponent;
  let fixture: ComponentFixture<EventmakeraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventmakeraccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmakeraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
