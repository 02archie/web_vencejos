import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativesRoutingModule } from './administratives-routing.module';
import { AdministrativesComponent } from './administratives.component';


@NgModule({
  declarations: [
    AdministrativesComponent
  ],
  imports: [
    CommonModule,
    AdministrativesRoutingModule
  ]
})
export class AdministrativesModule { }
