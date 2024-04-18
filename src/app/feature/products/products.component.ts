import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductsService } from '../../api/products.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export default class ProductsComponent {
  private readonly productScx = inject(ProductsService);
  products = this.productScx.products;
  // constructor() {
  //   // console.log(this.products());
  // }

  // ngOnInit(): void {
  //   console.log(this.products());
  // }
}
