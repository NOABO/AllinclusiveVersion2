import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMadeComponent } from './events-made.component';

describe('EventsMadeComponent', () => {
  let component: EventsMadeComponent;
  let fixture: ComponentFixture<EventsMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
