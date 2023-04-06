import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../service/modal.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() iconClass: string | undefined;
  @Input() label: string | undefined
  display = 'none';
  modalSubRef: Subscription | undefined;

  constructor(private service: ModalService) {
  }

  ngOnInit(): void {
    this.modalSubRef = this.service.observe().subscribe(res => {
      this.display = (res) ? 'block' : 'none'
    })
  }
  
  ngOnDestroy(): void {
    this.modalSubRef?.unsubscribe();
  }

  onBack() {
    this.service.deActivate();
  }

}
