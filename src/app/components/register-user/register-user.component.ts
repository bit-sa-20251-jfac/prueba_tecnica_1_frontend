import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  username: string = '';
  password: string = '';
  clients: string = '';
  pedidos: string = '';
  productos: string = '';
  transportistas: string = '';
  rutas: string = '';
  estado_de_envio: string = '';
  categorias: string = '';

  clientsList: string[] = ['En preparación 0%', 'En almacén 25%', 'En tránsito 50%', 'En tu zona para distribución 75%', 'Entregado 100%']; // Opciones de la lista
  pedidosList: string[] = ['Pendiente', 'En Proceso', 'Entregado']; // Opciones de la lista
  productosList: string[] = ['TEXTIL', 'ALIMENTO', 'MATERIAL']; // Opciones de la lista    
  transportistasList: string[] = ['SERVIENTREGA', 'FEDEX', 'UPS']; // Opciones de la lista
  rutasList: string[] = ['BOG-MED', 'BOG-NYC', 'MED-BOG']; // Opciones de la lista
  estado_de_envioList: string[] = ['EN RUTA', 'ENTREGADO', 'PENDIENTE']; // Opciones de la lista
  categoriasList: string[] = ['ALIMENTOS', 'TEXTILES', 'MATERIALES']; // Opciones de la lista


  constructor(private userService: userService){}

 register(): void {
    // Convertir los valores en arrays si contienen comas
    const formattedUser = {
      username: this.username,
      password: this.password,
      clients: this.clients ? this.clients.split(',') : [],
      pedidos: this.pedidos ? this.pedidos.split(',') : [],
      productos: this.productos ? this.productos.split(',') : [],
      transportistas: this.transportistas ? this.transportistas.split(',') : [],
      rutas: this.rutas ? this.rutas.split(',') : [],
      estado_de_envio: this.estado_de_envio ? this.estado_de_envio.split(',') : [],
      categorias: this.categorias ? this.categorias.split(',') : []
    };

    this.userService.createUser(formattedUser).subscribe({
      next: (response) => {
        console.log(response);
        Swal.fire({
          title: "!Pedido creado con exito!",
          icon: "success",
          draggable: false
        });
        // Limpiar los campos del formulario después del registro
        this.username = '';
        this.password = '';
        this.clients = '';
        this.pedidos = '';
        this.productos = '';
        this.transportistas = '';
        this.rutas = '';
        this.estado_de_envio = '';
        this.categorias = '';
      },
      error: (error) => {
        Swal.fire({
          title: "Error",
          icon: "error"
        });
      }
    })
  }
}

