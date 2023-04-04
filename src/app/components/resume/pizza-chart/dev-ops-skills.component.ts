import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-dev-ops-skills',
  templateUrl: './dev-ops-skills.component.html',
  styleUrls: ['./dev-ops-skills.component.scss']
})
export class DevOpsSkillsComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
  };
  public pieChartLabels: string[] = ["Docker", "CI/CD", "Kurbenetes"];
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ["Docker", "CI/CD", "Kurbenetes"],
    datasets: [
      {
        data: [50, 35, 15],
        label: 'Percentage',
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }
}
