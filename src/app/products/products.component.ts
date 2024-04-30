import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productService:ProductService) {

  }

  products: Array<Product> = [];

  ngOnInit() {
   this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().
    subscribe({
      next: data => {
        this.products = data;
      },
      error: err =>{
        console.log(err);
      }
    });
  }
  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next : updatedProduct => {
        product.checked=!product.checked;
        //this.getProducts();


      }
    })
  }
}
