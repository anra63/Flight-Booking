// src/app/components/sidebar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <nav>
      <ul>
        <li><a routerLink="/users" routerLinkActive="active">Users</a></li>
        <li><a routerLink="/flights" routerLinkActive="active">Flights</a></li>
        <li><a routerLink="/bookings" routerLinkActive="active">Bookings</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
    nav {
      width: 200px;
      background:rgb(158, 218, 151);
      padding: 20px;
      height: 100vh;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 15px 0;
    }
    a {
      text-decoration: none;
      color: #007bff;
      font-size: 18px;
    }
    .active {
      font-weight: bold;
      color: red;
    }
    `,
  ],
  imports: [RouterLink, RouterLinkActive],
})
export class SidebarComponent {}
