import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';

const routes: Routes = [
  { path: 'conversion', component: ConversionFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
