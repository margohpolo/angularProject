import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecardComponent } from './servicecard.component';

describe('ServicecardComponent', () => {
  let component: ServicecardComponent;
  let fixture: ComponentFixture<ServicecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
