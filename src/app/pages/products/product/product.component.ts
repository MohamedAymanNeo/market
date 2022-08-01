import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
@Input() data: any = {}
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
