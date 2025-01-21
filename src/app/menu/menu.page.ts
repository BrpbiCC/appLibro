import { Component, OnInit } from '@angular/core';
import { IonicModule, MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router'; // Asegúrate de importar Router correctamente
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,  // Esto está bien si estás utilizando un componente independiente
  imports: [IonicModule]  // Esto está bien si estás utilizando IonicModule en un componente independiente
})
export class MenuPage implements OnInit {

  constructor(private router: Router, private menuController: MenuController, private location: Location, private navCtrl: NavController) { }  

  ngOnInit() {
    this.menuController.open();  // Esto abre el menú cuando se carga la página
  }
  
  closeMenu() {
    this.menuController.close();
  }

  goToContacto() {
    this.router.navigate(['/contacto']);  // Redirige a la página de contacto
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    // Aquí podrías agregar la lógica para cerrar sesión (como limpiar almacenamiento, etc.)
    this.router.navigate(['/home']);  
  }

  goToCarrito() {
    this.router.navigate(['/carrito']);  
  }

  goBack() {
    this.location.back(); 
  }
  goToCategorias() {
    this.navCtrl.navigateForward('/categorias');
  }
}
