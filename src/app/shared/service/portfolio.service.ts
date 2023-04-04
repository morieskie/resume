import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../model/Project";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private client: HttpClient) {
  }

  get(): Observable<Project[]> {
    return this.client.get<Project[]>(`${environment.subDir}/assets/data/portfolio.json`);
  }
}
