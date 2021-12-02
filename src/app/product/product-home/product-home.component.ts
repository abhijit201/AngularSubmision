import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  products: Product[] = [];
   
  constructor(public productService: ProductService) { }
    
  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(this.products);
    })  
  }
    
  deleteProduct(id:number){
    this.productService.delete(id).subscribe(res => {
         this.products = this.products.filter(item => item.productId !== id);
         console.log('product deleted successfully!');
    })
  }

}
