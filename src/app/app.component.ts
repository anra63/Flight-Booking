import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlightsComponent } from './flights/flights.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, SidebarComponent,CommonModule,FlightsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flights-booking';
}
