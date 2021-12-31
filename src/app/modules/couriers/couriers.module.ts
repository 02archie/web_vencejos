import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouriersRoutingModule } from './couriers-routing.module';
import { CouriersComponent } from './couriers.component';


@NgModule({
  declarations: [
    CouriersComponent
  ],
  imports: [
    CommonModule,
    CouriersRoutingModule
  ]
})
export class CouriersModule { }
