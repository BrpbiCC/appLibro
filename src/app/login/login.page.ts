import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class LoginPage implements OnInit {
  diccionario = {
    user: '',
    pw: '',
  };

  searchText: string = ''; // Texto para el buscador
  items = [
    { name: 'El libro de Bill', description: 'Alex Hirsch' },
    { name: 'Los siete maridos de Evelyn Hugo', description: 'Taylor Jenkins Reid' },
    { name: 'El buzón de las impuras', description: 'Francisca Solar' }
  ];

  constructor(
    private aRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private menuController: MenuController
  ) {}

  ngOnInit() {
    this.aRoute.queryParams.subscribe((params) => {
      this.diccionario.user = params['data1'];
      this.diccionario.pw = params['data2'];
    });
    this.menuController.open(); // Esto abre el menú cuando se carga la página
  }

  closeMenu() {
    this.menuController.close();
  }

  goBack() {
    this.navCtrl.back();
  }

  goToContacto() {
    this.router.navigate(['/contacto']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/home']);
  }

  goToCarrito() {
    this.router.navigate(['/carrito']);
  }

  goToCategorias() {
    this.router.navigate(['/menu']);
  }

  onSearchInput() {
    console.log('Buscando:', this.searchText);
    // Lógica para filtrar los productos basados en el texto de búsqueda
  }
}
