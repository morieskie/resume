import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Output() nav: EventEmitter<any> = new EventEmitter<any>();

  onClick(path: string) {
    this.nav.emit(path);
  }

}
