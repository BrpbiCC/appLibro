import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicModule, NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [ IonicModule]
})
export class CarritoPage implements OnInit {

  constructor( private navCtrl: NavController, 
    private router: Router, 
    private menuController: MenuController, 
    private location: Location) { }

  
    productos: any[] = [
      { id: 1, nombre: 'Producto 1', precio: 20, cantidad: 1 },
      { id: 2, nombre: 'Producto 2', precio: 15, cantidad: 1 },
      { id: 3, nombre: 'Producto 3', precio: 30, cantidad: 1 },
    ];
  
    agregarMas(productoId: number) {
      console.log(`Agregar más del producto ${productoId}`);
    }
  
    eliminarProducto(productoId: number) {
      console.log(`Eliminar el producto ${productoId}`);
    }
  
    marcarFavorito(productoId: number) {
      console.log(`Marcar como favorito el producto ${productoId}`);
      
    }
  
    seguirComprando() {
      console.log('Seguir comprando');
    }
  
    pagar() {
      console.log('Procesar el pago');
    }
  
    vaciarCarrito() {
      this.productos = [];
      console.log('Carrito vaciado');
    }

    ngOnInit() {
      this.menuController.open();  // Esto abre el menú cuando se carga la página
    }
  closeMenu() {
    this.menuController.close();
  }

  goBack() {
    this.location.back(); 
  }

  goToContacto() {
    this.router.navigate(['/contacto']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/home']);
  }

  goToCategorias() {
    this.router.navigate(['/menu']);  
  }

}
