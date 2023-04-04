import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Technology} from "../model/Technology";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  constructor(private client: HttpClient) {
  }

  get(): Observable<Technology[]> {
    return this.client.get<Technology[]>(`${environment.subDir}/assets/data/technologies.json`);
  }
}
