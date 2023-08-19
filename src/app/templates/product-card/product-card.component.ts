import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit{

  @Input() id: number = 0;
  @Input() thumbnail: string = "";
  @Input() description: string = "";
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() brand: string = "";
  @Input() rating :number = 0;
  @Input() stock :number = 0;
  @Input() discountPercentage :number = 0;



  constructor(
    private router: Router,
    private _homeService: HomeService,
  ) { }

  ngOnInit(): void {
  }

  navigateToDetails(id : number){
    this.router.navigate(['/details', id]);
    // console.log(this.id);
  }

  addToCart(event : Event){
// console.log("nayoe");
    event.stopPropagation();
    this._homeService.addCartToLocalStorage({
      "id": this.id,
      "thumbnail": this.thumbnail,
      "description": this.description,
      "title": this.title,
      "price": this.price,
      "brand": this.brand,
      "discountPercentage": this.discountPercentage,
    });
  }

}
