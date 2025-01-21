import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class HomePage {
  //atributos
    data= {
      user :'',
      pw:'',
    }
  
    constructor(private nCtrl: NavController ) {}
    //metodos
    goLogin(){
      let nExtras: NavigationExtras ={
        queryParams:{
          data1: this.data.user,
          data2: this.data.pw
        } 
      };
      this.nCtrl.navigateForward(['/login'],nExtras);
    }//fin  del metodo goLogin
  }//fin de la clase HomePage