import { Component, OnInit } from '@angular/core';
// import { ChartType, ChartOptions } from 'chart.js';
// import { Label } from 'ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-ft-board-chart',
  templateUrl: './ft-board-chart.component.html',
  styleUrls: ['./ft-board-chart.component.css']
})
export class FtBoardChartComponent implements OnInit {

   options: any = {};
   xAxisData: any = [];
   data1: any = [];
   data2: any = [];
  
  constructor() { }

  ngOnInit() {
    

    for (let i = 0; i < 100; i++) {
      this.xAxisData.push('category' + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: this.data1,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: this.data2,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

  ngAfterViewInit() {
    
  }





}
