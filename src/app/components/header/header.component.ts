// src/app/components/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1>Make My Travel</h1>
    </header>
  `,
  styles: [
    `
    header {
      background: rgb(79, 158, 168);
      color: white;
      text-align: center;
      padding: 5px; /* Reduced padding */
      font-size: 18px; /* Adjusted font size */
    }
    `,
  ],
})
export class HeaderComponent {}
