import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { HomeModel } from './home.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  data: Array<HomeModel> = new Array<HomeModel>();
  categories: Array<string> = new Array<string>();
  selectedCategory: string = '';

  constructor(
    private _homeService: HomeService,
  ) {


  }

  ngOnInit(): void {
    this.getProductList();
    this.getCategories();
  }



  // get product list from api
  getProductList() {
    this._homeService.getProductList().subscribe({
      next: (res) => {
        this.data = res.products;
      },
      complete: () => {
        this.roundoffRating();
      }
    });
  }


  // get product list by selected category from api
  getProductListByCategory() {
    this._homeService.getProductListByCategory(this.selectedCategory).subscribe({
      next: (res) => {
        this.data = res.products;
      },
      complete: () => {
        this.roundoffRating();
      }
    });
  }


  // round off the rating to ceiling and floor value
  roundoffRating() {
    this.data.map((item) => {
      var decimalPart = item.rating - Math.floor(item.rating);
      if (decimalPart >= 0.6) {
        return item.rating = Math.ceil(item.rating);
      } else {
        return item.rating = Math.floor(item.rating);
      }
    });
  }


  // get the category list
  getCategories() {
    this._homeService.getCategoryList().subscribe({
      next: (res) => {
        this.categories = res;
      }
    });
  }


  //  get called when user clicks on a category , it changes the currently selected category and calls the getProductListByCategory() method
  displayByCategory(category: string) {
    this.selectedCategory = category;
    this.getProductListByCategory();
  }



}
