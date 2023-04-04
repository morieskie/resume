import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Testimony} from "../model/Testimony";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  constructor(private client: HttpClient) {
  }

  get(): Observable<Testimony[]> {
    return this.client.get<Testimony[]>(`${environment.subDir}/assets/data/testimonials.json`);
  }
}
