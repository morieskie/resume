import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Education} from "../model/Education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private client: HttpClient) {
  }

  get(): Observable<Education[]> {
    return this.client.get<Education[]>(`assets/data/education.json`);
  }
}
