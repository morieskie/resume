import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Me} from "../model/me";

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(private client: HttpClient) {
  }

  get(): Observable<Me> {
    return this.client.get<Me>(`/assets/data/about.json`);
  }
}
