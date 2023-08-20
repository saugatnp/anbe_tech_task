import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer } from "rxjs";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";


@Injectable({
    providedIn: "root"

})

export class HomeService {

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }


    products: Array<any> = [];


    //get product list from api
    getProductList(): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products");
    }

    //get product by id from api
    getProductDetailById(id: string): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/" + id);
    }

    // get product by the search param passed, from the api
    getProductListBySearch(searchText: string): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/search?q=" + searchText);
    }

    // get product by the category param passed, from the api
    getProductListByCategory(category: string): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/category/" + category);
    }

    // get categories list from the api
    getCategoryList(): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/categories");
    }

    // add product to the local storage as cart items
    addCartToLocalStorage(data: any) {
        const existingProducts = localStorage.getItem('products');
        if (existingProducts) {
            this.products = JSON.parse(existingProducts);
        }
        // check if the item already exist in the cart
        const existingProductIndex = this.products.findIndex(product => product.id === data.id);
        if (existingProductIndex !== -1) {
            // if quantity is not passed then increase the quantity by 1 else set the quantity to the passed value
            // this is used as when add to cart button is clicked we do not pass the quantity so we just increase the quantity by 1
            // but when we increase the quantity from the cart screen we pass the quantity value and is updated in the local storage
            data.quantity == undefined ? this.products[existingProductIndex].quantity++ : this.products[existingProductIndex].quantity = data.quantity;

            // calculate the total price of the product after quanity changes
            this.products[existingProductIndex].total = parseFloat(((this.products[existingProductIndex].price * this.products[existingProductIndex].quantity) - (((this.products[existingProductIndex].price * this.products[existingProductIndex].quantity) / 100) * this.products[existingProductIndex].discountPercentage)).toFixed(2));
        } else {

            // if the product doesn't already exist in the cart then add a new product to the cart
            var newProduct = {
                "id": data.id,
                "title": data.title,
                "description": data.description,
                "price": data.price,
                "discountPercentage": data.discountPercentage,
                "brand": data.brand,
                "thumbnail": data.thumbnail,
                "quantity": 1,
                "total": (data.price - ((data.price / 100) * data.discountPercentage))
            }
            this.products.push(newProduct);
        }

        //update local storage
        localStorage.setItem('products', JSON.stringify(this.products));
    }


    // get the items from localstorage as cart item
    getProductFromLocalStorage() {
        const existingProducts = localStorage.getItem('products');
        if (existingProducts) {
            this.products = JSON.parse(existingProducts);
        }
        return this.products;
    }


    //clear the cart after payment success
    clearCart() {
        localStorage.removeItem('products');
    }


    // delete particular item from the cart using its id
    removeProductById(id: number) {
        const existingProducts = localStorage.getItem('products');
        if (existingProducts) {
            this.products = JSON.parse(existingProducts);
        }
        //find product by its id
        const existingProductIndex = this.products.findIndex(product => product.id === id);
        if (existingProductIndex !== -1) {
            // remove the product by using its index in the array
            this.products.splice(existingProductIndex, 1);
        }
        //update items in localstorage
        localStorage.setItem('products', JSON.stringify(this.products));
    }


}