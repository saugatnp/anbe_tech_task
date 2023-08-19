import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject, debounceTime } from 'rxjs';
import { HomeModel } from 'src/app/contents/home-screen/home.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  search: string = '';
  items: MenuItem[] | undefined;

  products: Array<HomeModel> = new Array<HomeModel>();
  selectedProduct: HomeModel = new HomeModel();
  private searchValue: Subject<string> = new Subject<string>();


  constructor(
    private _homeService: HomeService,
    private _router: Router
  ) {

    this.searchValue.pipe(debounceTime(400))
      .subscribe({
        next: res => {
          this.getData()
        }
      });
  }

  ngOnInit() {
    this.items = [
     
      {
        label: 'Deals',
      },
      {
        label: "What's New",

      },
      {
        label: 'Delivery',

      },

    ];
  }

 

  getData() {
    this._homeService.getProductListBySearch(this.search).subscribe({
      next: (res) => {
        this.products = res.products;
      },
    });

  }

  filterData() {
    this.searchValue.next(this.search)
  }

  showDetails() {
    this.products = [];
    this.search = '';
    this._router.navigate(['/details', this.selectedProduct.id]);
  }

}
