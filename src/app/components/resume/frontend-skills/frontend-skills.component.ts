import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions, ChartType} from "chart.js";
import {ChartDataset} from 'chart.js';

@Component({
  selector: 'app-frontend-skills',
  templateUrl: './frontend-skills.component.html',
  styleUrls: ['./frontend-skills.component.scss']
})
export class FrontendSkillsComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      y: {
        suggestedMax: 100
      }
    },
    plugins: {
      title: {
        display: false,
      },
    }
  };
  public barChartLabels: any[] = ["TypeScript", "JavaScript", "Angular", "React", "Vue3"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ["TypeScript", "JavaScript", "Angular", "React", "Vue3"],
    datasets: [
      {
        data: [90, 95, 85, 70, 70],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56","#E7E9ED" , "#36A2EB", /*"#4BC0C0", "#E7E9ED"*/]
      },
    ],
  };
}
