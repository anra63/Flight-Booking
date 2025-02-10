// src/app/app-routing.ts
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FlightsComponent } from './flights/flights.component';
import { BookingsComponent } from './bookings/bookings.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: '', redirectTo: 'flights', pathMatch: 'full' },
];
