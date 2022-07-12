import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styles: [
  ]
})
export class AllProductsComponent implements OnInit {

  constructor(private prodServ: ProductsService) { }
  products: any= []
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.prodServ.getAllProducts().subscribe((res: any) => {
      console.log(res);
      
      this.products = res;
    })
  }
}
