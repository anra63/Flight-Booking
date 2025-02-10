
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private apiUrl = 'http://localhost:8083/bookings/user/1';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
