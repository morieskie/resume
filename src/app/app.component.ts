import {Component, Inject, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = environment.appTitle;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    let bases = this.document.getElementsByTagName('base');

    if (bases.length > 0) {
      bases[0].setAttribute('href', environment.basePath);

    }
  }
}
