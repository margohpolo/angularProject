import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtBoardChartComponent } from './ft-board-chart.component';

describe('FtBoardChartComponent', () => {
  let component: FtBoardChartComponent;
  let fixture: ComponentFixture<FtBoardChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtBoardChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtBoardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
