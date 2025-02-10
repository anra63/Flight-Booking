// src/app/bookings/bookings.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsService } from '../services/bookings.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  template: `
    <h2>Bookings</h2>
    <ul>
      <li *ngFor="let booking of bookings">{{ booking.id }}</li>
    </ul>
  `,
  imports: [CommonModule],
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingsService: BookingsService) {}

  ngOnInit() {
    this.bookingsService.getBookings().subscribe((data) => {
      this.bookings = data;
    });
  }
}
