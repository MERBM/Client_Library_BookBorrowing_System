import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from 'src/app/shared/components/book/book.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:BookComponent
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule
  ]
})
export class MaterialRoutingModule { }
