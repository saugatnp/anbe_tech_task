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
  data: Array<HomeModel> = new Array<HomeModel>();
  id : string = '';
  dataDetail : HomeModel = new HomeModel();
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
    this._homeService.getProductList().subscribe({
      next: (res) => {
        this.data = res.products;
      },
      complete: () => {
        console.log(this.data);
        this.roundoffRating();
      }
    });
  }


  roundoffRating() {
    this.data.map((item) => {
      var decimalPart = item.rating - Math.floor(item.rating);
      if (decimalPart >= 0.6) {
        return item.rating =  Math.ceil(item.rating);
      } else {
        return item.rating =  Math.floor(item.rating);
      }
    });
    this.filterProductById();
  }

  filterProductById() {
    this.dataDetail = this.data.find(item =>  item.id.toString() == this.id)!;
    this.displayImage = this.dataDetail.images[0];
  }

  changeDisplayImage(index: number){
    var image = this.dataDetail.images[0];
    this.displayImage = this.dataDetail.images[index];
    this.dataDetail.images[index] = image;
    this.dataDetail.images[0] = this.displayImage;
  }

}
