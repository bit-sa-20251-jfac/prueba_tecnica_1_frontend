import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscar-user.component.html',
  styleUrl: './buscar-user.component.css'
})

export class BuscarUserComponent {

  username : string = '';
  user: any = {username:"", password:""};

  constructor(private userService: userService) {}

  findUser(): void{
    console.log(this.username)
    this.userService.findUser(this.username).subscribe({
      next:(response) =>{
        console.log(response);
        this.username = '';
      },
      error:(response) =>{
        console.log(response)
        alert('No se encontró el usuario')
      }
    })
  }
}