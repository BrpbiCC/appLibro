import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicModule, MenuController, NavController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Declara google como variable global
declare const google: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ContactoPage implements OnInit, AfterViewInit {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;

  constructor(
    private location: Location,
    private menuController: MenuController,
    private navCtrl: NavController,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Opcional: elimina esta línea si no necesitas abrir el menú automáticamente.
    this.menuController.open();
  }

  ngAfterViewInit() {
    this.initMap();
  }

  closeMenu() {
    this.menuController.close();
  }

  goBack() {
    this.location.back();
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/home']);
  }

  goToCategorias() {
    this.router.navigate(['/menu']);
  }

  goToCarrito() {
    this.router.navigate(['/carrito']);
  }

  initMap() {
    const googleMaps = (window as any)['google'];
    if (!googleMaps || !googleMaps.maps) {
      console.error('La API de Google Maps no está cargada.');
      return;
    }

    const libreriaUbicacion = { lat: -33.4489, lng: -70.6693 }; // Coordenadas de Santiago, Chile
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: libreriaUbicacion,
      zoom: 15,
    });

    new google.maps.Marker({
      position: libreriaUbicacion,
      map,
      title: 'Librería Libriko',
    });
  }
}

