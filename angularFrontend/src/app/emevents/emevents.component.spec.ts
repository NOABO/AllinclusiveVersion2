import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMeventsComponent } from './emevents.component';

describe('EMeventsComponent', () => {
  let component: EMeventsComponent;
  let fixture: ComponentFixture<EMeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
