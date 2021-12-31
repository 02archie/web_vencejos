import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativesComponent } from './administratives.component';

const routes: Routes = [{ path: '', component: AdministrativesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativesRoutingModule { }
