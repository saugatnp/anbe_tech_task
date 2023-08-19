import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { HomeModel } from '../home-screen/home.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-screen',
  templateUrl: './product-detail-screen.component.html',
  styleUrls: ['./product-detail-screen.component.css']
})
export class ProductDetailScreenComponent implements OnInit {



  rating :number = 0;
  data: HomeModel = new HomeModel();
  id : string = '';
  displayImage : string = '';


  constructor(
    private _homeService: HomeService,
    private route: ActivatedRoute

  ) {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.getProductList();
    });
  }

  ngOnInit(): void {
  }

  
  getProductList() {
    this._homeService.getProductDetailById(this.id).subscribe({
      next: (res) => {
        this.data = res;
      },
      complete: () => {
        this.roundoffRating();
      }
    });
  }


  roundoffRating() {
      this.displayImage = this.data.images[0];
      var decimalPart = this.data.rating - Math.floor(this.data.rating);
      if (decimalPart >= 0.6) {
        return this.data.rating =  Math.ceil(this.data.rating);
      } else {
        return this.data.rating =  Math.floor(this.data.rating);
      }
  }



  changeDisplayImage(index: number){
    var image = this.data.images[0];
    this.displayImage = this.data.images[index];
    this.data.images[index] = image;
    this.data.images[0] = this.displayImage;
  }

  addToCart(dataDetail : any){
    this._homeService.addCartToLocalStorage(dataDetail);
  }

}
