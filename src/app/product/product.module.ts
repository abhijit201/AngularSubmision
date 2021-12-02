import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortUrlPipePipe } from './short-url-pipe.pipe';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductHomeComponent,
    ProductUpdateComponent,
    ShortUrlPipePipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
