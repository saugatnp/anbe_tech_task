import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-checkout-screen',
  templateUrl: './checkout-screen.component.html',
  styleUrls: ['./checkout-screen.component.css']
})
export class CheckoutScreenComponent implements OnInit {


  productsList: Array<any> = new Array<any>();
  total: number = 0;
  grandTotal: number = 0;
  visible: boolean = false;


  name: string = '';
  email: string = '';
  address: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(
    private _homeService: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this.productsList = this._homeService.getProductFromLocalStorage();
    this.getTotal();
  }

  getTotal() {
    this.productsList.map((item) => {
      this.total += item.total;
    });
    this.grandTotal = this.total + ((this.total / 100) * 13);

  }

  submitPayment(form: NgForm) {
    if (form.valid) {
      this._homeService.clearCart();
      console.log({
        "products": this.productsList,
        "name": this.name,
        "email": this.email,
        "address": this.address,
        "cardNumber": this.cardNumber,
        "expiryDate": this.expiryDate,
        "cvv": this.cvv,
        "total": this.total,
        "grandTotal": this.grandTotal
      });
      this.visible = true;
      this.router.navigate(['/success']);
    }
    else {
      alert('Please fill all the details');
    }
  }


}
