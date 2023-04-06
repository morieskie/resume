import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-backend-skills',
  templateUrl: './backend-skills.component.html',
  styleUrls: ['./backend-skills.component.scss']
})
export class BackendSkillsComponent {
  public doughnutChartLabels: string[] = ["PHP", "Node", "SQL/NoSQL"];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {

    }
  };

  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ["PHP", "Node", "SQL","NoSQL"],
    datasets: [
      {
        data: [50, 40, 20, 10],
        label: 'Percentage',
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';
}
