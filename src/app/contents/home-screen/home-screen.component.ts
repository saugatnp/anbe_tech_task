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
    this._homeService.getCategoryList().subscribe({
       next: (res) => {
         this.categories = res;
       }
     });
   }

   displayByCategory(category: string) {
      this.selectedCategory = category;
      this.getProductListByCategory();
    }

   
  
}
