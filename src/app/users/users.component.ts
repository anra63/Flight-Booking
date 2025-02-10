// src/app/users/users.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <h2>Users</h2>
    <ul>
      <li *ngFor="let user of users">{{ user.id }}</li>
    </ul>
  `,
  imports: [CommonModule],
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
