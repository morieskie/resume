import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from "../../service/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() iconClass: string | undefined;
  @Input() label: string | undefined
  display = 'none';


  constructor(private service: ModalService) {
  }

  ngOnInit(): void {
    this.service.observe().subscribe(res => {
      this.display = (res) ? 'block' : 'none'
    })
  }

  onBack() {
    this.service.deActivate();
  }

}
