import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { FlightsService } from '../services/flights.service';
 


@Component({
  selector: 'app-flights', // Or 'app-flight' if using flight.component.ts
  standalone: true, // ✅ Make it standalone
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule
  templateUrl: './flights.component.html', // Ensure correct template file
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  departures: string[] = [];
  arrivals: string[] = [];
  selectedDeparture: string = '';
  selectedArrival: string = '';

  constructor(private flightsService: FlightsService) {}

  ngOnInit() {
    this.flightsService.getFlights().subscribe((flights) => {
      this.departures = [...new Set(flights.map(flight => flight.departure))];
      this.arrivals = [...new Set(flights.map(flight => flight.arrival))];
    });
  }
  
  bookFlight() {
    alert('Flight booked successfully!');
    console.log(`Booking flight from ${this.selectedDeparture} to ${this.selectedArrival}`);
  }
}
