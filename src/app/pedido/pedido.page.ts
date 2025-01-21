import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  standalone: true,
  imports:[ IonicModule, FormsModule ]
})
export class PedidoPage {
  // Arreglo de libros existentes
  books = [
    { title: 'Libro 1', author: 'Autor 1', year: 2021, price: 10, image: 'https://via.placeholder.com/150' },
    { title: 'Libro 2', author: 'Autor 2', year: 2020, price: 15, image: 'https://via.placeholder.com/150' },
    { title: 'Libro 3', author: 'Autor 3', year: 2019, price: 20, image: 'https://via.placeholder.com/150' }
  ];

  // Nuevo libro que se está agregando
  newBook = {
    title: '',
    author: '',
    year: '', // 'year' como string por defecto
    price: '', // 'price' como string por defecto
    image: ''
  };

  constructor(private location: Location) {}

  goBack() {
    this.location.back(); 
  }

  addBook() {
    // Validación de que todos los campos están completos
    if (this.newBook.title && this.newBook.author && this.newBook.year && this.newBook.price && this.newBook.image) {
      // Convertir year y price a números antes de agregar al arreglo
      const newBookToAdd = {
        ...this.newBook,
        year: Number(this.newBook.year),   // Convertir 'year' a número
        price: Number(this.newBook.price)  // Convertir 'price' a número
      };
      
      this.books.push(newBookToAdd);  // Agregar el libro al arreglo de libros
      console.log('Libro agregado:', newBookToAdd);

      // Resetea el formulario
      this.newBook = { title: '', author: '', year: '', price: '', image: '' };
    } else {
      console.log('Por favor complete todos los campos');
    }
  }
}
