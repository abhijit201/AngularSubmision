import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  { path: 'product', redirectTo: 'product/index', pathMatch: 'full'},
  { path: 'product/index', component: ProductHomeComponent },
  { path: 'product/:productId/details', component: ProductDetailsComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/:productId/update', component: ProductUpdateComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
