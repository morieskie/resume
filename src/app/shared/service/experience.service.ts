import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experience} from "../model/Experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private client: HttpClient) {
  }

  get(): Observable<Experience[]> {
    return this.client.get<Experience[]>(`assets/data/experience.json`);
  }
}
