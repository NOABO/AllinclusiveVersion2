import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCustomerComponent } from './login-customer.component';

describe('LoginCostumerComponent', () => {
  let component: LoginCustomerComponent;
  let fixture: ComponentFixture<LoginCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginCustomerComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
