import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Testimony} from "../model/Testimony";

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  constructor(private client: HttpClient) {
  }

  get(): Observable<Testimony[]> {
    return this.client.get<Testimony[]>(`/assets/data/testimonials.json`);
  }
}
