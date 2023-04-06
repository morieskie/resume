import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Output() closed : EventEmitter<void> = new EventEmitter<void>()
  onClose() {
    this.closed.emit();
  }
}
