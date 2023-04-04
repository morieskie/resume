import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Technology} from "../model/Technology";

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  constructor(private client: HttpClient) {
  }

  get(): Observable<Technology[]> {
    return this.client.get<Technology[]>(`/assets/data/technologies.json`);
  }
}
