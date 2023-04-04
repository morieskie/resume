import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Me} from "../model/me";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(private client: HttpClient) {
  }

  get(): Observable<Me> {
    return this.client.get<Me>(`${environment.subDir}/assets/data/about.json`);
  }
}
