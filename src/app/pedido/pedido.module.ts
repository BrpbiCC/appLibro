import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoPageRoutingModule } from './pedido-routing.module';

import { PedidoPage } from './pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoPageRoutingModule
  ],
  declarations: []
})
export class PedidoPageModule {}
