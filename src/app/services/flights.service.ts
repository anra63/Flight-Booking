import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private flightsUrl = 'http://localhost:8082/flights'; // Backend endpoint

  constructor(private http: HttpClient) {}

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(this.flightsUrl);
  }
}
