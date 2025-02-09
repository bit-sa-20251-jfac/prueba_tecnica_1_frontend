import { Component } from '@angular/core';
import { routes } from './app.routes'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ListUsersComponent } from "./components/list-users/list-users.component";


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,RouterLink, ListUsersComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  routes = routes;
}