import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent {
  @Input() position: 'right' | 'left' = 'left';
  wrapper = 'testimonial_left';
  ribbon = 'right ribbon';

  ngOnInit() {
    this.wrapper = 'testimonial_' + this.position;
    this.ribbon = this.position === 'right' ? 'left ribbon' : 'right ribbon';
  }
}
