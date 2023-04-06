import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../shared/model/Project";

export const chunk = (arr: string[], size: number) =>
  Array.from({length: Math.ceil(arr.length / size)}, (_: Project, i: number) =>
    arr.slice(i * size, i * size + size)
  );

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: Project | undefined;
  chunks: string[][] = [];

  ngOnInit() {
    if (this.item?.technologies)
      this.chunks = chunk(this.item.technologies, 5)
  }
}
