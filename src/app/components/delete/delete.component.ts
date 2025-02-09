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
      this.userService.deleteUser(this.username).subscribe({
        next:(response) =>{
          console.log(response);
          alert ("Usuario eliminado exitosamente")
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