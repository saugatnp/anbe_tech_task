import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.css']
})
export class CartScreenComponent implements OnInit {


  productsList: Array<any> = new Array<any>();

  constructor(
    private _homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getCartList();
  }


  // gets cart list from the local storage
  getCartList() {
    this.productsList = this._homeService.getProductFromLocalStorage();
  }


  // increase the quantity of the product in cart
  addQuantity(item: any) {
    item.quantity++;
    this._homeService.addCartToLocalStorage(item);
    this.getCartList();
  }


  // decrease the quantity of product in cart
  reduceQuantity(item: any) {
    if (item.quantity == 0)
      return;
    item.quantity--;
    this._homeService.addCartToLocalStorage(item);
    this.getCartList();
  }


  // remove item from cart using its id
  removeFromCart(id: number) {
    this._homeService.removeProductById(id);
    this.getCartList();
  }

}
