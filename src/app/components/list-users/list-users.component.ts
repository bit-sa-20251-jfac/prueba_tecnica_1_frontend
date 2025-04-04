import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  colors: string[] = ["#ff0000", "#ff6800", "#00ff1b", "#f6ff00", "#00c9ff", "#ff00e7"];

  constructor(private userService: userService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response.users;
    });
  }

  getColor(index: number): string {
    return this.colors[index % this.colors.length];
  }
}