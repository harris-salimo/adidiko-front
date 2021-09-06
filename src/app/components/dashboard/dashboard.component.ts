import { Component, OnInit } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faChart = faChartLine;

  doughnutChartData = [
    {
      data: [330, 600, 260, 700],
      labels: ['Account A', 'Account B', 'Account C', 'Account D']
    }
  ];
  doughnutChartLabels = ['Account A', 'Account B', 'Account C', 'Account D'];

  lineChartData = [
    {
      data: [330, 600, 260, 700, 120, 455, 100, 340, 45, 67, 800, 500],
      label: 'Account A'
    }
  ];
  lineChartLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jon',
    'Jol',
    'Aog',
    'Sep',
    'Okt',
    'Nov',
    'Des'
  ];
  chartOptions = {
    responsive: true
  };

  sumAdidy: Number = 0.00;
  percentAdidy: Number = 0.0;
  numOfMpandray: Number = 0;
  numOfUser: Number = 0;

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getDashboardData().subscribe(response => {
      if(response.success) {
        this.sumAdidy = response.sumAdidy;
        this.numOfMpandray = response.numOfMpandray;
        this.numOfUser = response.numOfUser;
      }
    });
  }

}
