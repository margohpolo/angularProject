import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FTSignupformComponent } from './ft-signupform.component';

describe('FTSignupformComponent', () => {
  let component: FTSignupformComponent;
  let fixture: ComponentFixture<FTSignupformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FTSignupformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTSignupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
