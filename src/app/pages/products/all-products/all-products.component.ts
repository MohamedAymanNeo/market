import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styles: [
  ]
})
export class AllProductsComponent implements OnInit {

  constructor(private prodServ: ProductsService, public router: Router) { }
  products: any= []
  loader:boolean = false
  categories:string[] = [];
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.loader = true
    this.prodServ.getAllProducts().subscribe((res: any) => {      
      this.products = res;
      this.loader = false
    })
  }
  getCategories() {
    this.prodServ.getAllCategories().subscribe((res: any) => {    
      this.categories = res;
    })
  }

  chooseCategory(e:any) {
    this.loader = true
    let value = e.target.value;
    this.prodServ.getCategory(value).subscribe((res: any) => {    
      this.products = res;
      this.loader = false
    })
    console.log(e.target.value);
    
  }
}
