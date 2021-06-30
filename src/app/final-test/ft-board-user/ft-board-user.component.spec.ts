import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTBoardUserComponent } from './ft-board-user.component';

describe('FTBoardUserComponent', () => {
  let component: FTBoardUserComponent;
  let fixture: ComponentFixture<FTBoardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FTBoardUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTBoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
