import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTBoardAdminComponent } from './ft-board-admin.component';

describe('FTBoardAdminComponent', () => {
  let component: FTBoardAdminComponent;
  let fixture: ComponentFixture<FTBoardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FTBoardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTBoardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
