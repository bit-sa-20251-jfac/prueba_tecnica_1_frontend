import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

    username : string = '';
    password : string = '';
  
    constructor(private userService: userService){}
  
    deleteUser(): void{
      this.userService.deleteUser({username:this.username, password:this.password}).subscribe({
        next:(response) =>{
          console.log(response);
          this.username = '';
          this.password = '';
        },
        error:(response) =>{
          console.log(response)
          alert('a')
        }
      })
    }
}