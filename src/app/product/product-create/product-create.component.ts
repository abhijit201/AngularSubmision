import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  form!: FormGroup;
   
  constructor(
    public productService: ProductService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      productCode: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      starRating: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('product/index');
    })
  }

}
