import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carrito;
totalPago=0;
  constructor() { }

  ngOnInit() {
  this.carrito=JSON.parse(localStorage.getItem('kart'))
for (let item of this.carrito) {
  this.totalPago+=parseInt(item.subtotal);
}
  }

}
