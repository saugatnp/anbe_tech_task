import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { HomeModel } from './home.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  data: Array<HomeModel> = new Array<HomeModel>();
  categories: Array<string> = new Array<string>();

  constructor(
    private _homeService: HomeService
  ) {

  }

  ngOnInit(): void {
    this.getProductList();
  }


  getProductList() {
    this._homeService.getProductList().subscribe({
      next: (res) => {
        this.data = res.products;
      },
      complete: () => {
        this.roundoffRating();
        this.getCategories();
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
  }

  getCategories() {
    let categories = this.data.map((item) => {
      return item.category.toUpperCase();
    });
    categories = categories.filter((item, index) => {
      return categories.indexOf(item) === index;
    });
    this.categories = categories;
  }
}
