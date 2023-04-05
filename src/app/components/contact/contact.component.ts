import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSend(e: Event){
    e.preventDefault()
    alert("Form is not configured or doesn't work for now")
  }

}
