import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTUsersComponent } from './users.component';

describe('FTUsersComponent', () => {
  let component: FTUsersComponent;
  let fixture: ComponentFixture<FTUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FTUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
