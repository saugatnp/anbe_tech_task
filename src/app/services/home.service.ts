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


    getProductList(): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products");
    }

    getProductDetailById(id: string): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/" + id);
    }

    getProductListBySearch(searchText: string): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/search?q=" + searchText);
    }

    getProductListByCategory(category: string): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/category/" + category);
    }


    getCategoryList(): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products/categories");
    }

    addCartToLocalStorage(data: any) {
        const existingProducts = localStorage.getItem('products');
        if (existingProducts) {
            this.products = JSON.parse(existingProducts);
        }
        const existingProductIndex = this.products.findIndex(product => product.id === data.id);
        if (existingProductIndex !== -1) {
            data.quantity == undefined ? this.products[existingProductIndex].quantity++ :
            this.products[existingProductIndex].quantity = data.quantity;
            this.products[existingProductIndex].total = parseFloat(((this.products[existingProductIndex].price * this.products[existingProductIndex].quantity)-(((this.products[existingProductIndex].price * this.products[existingProductIndex].quantity)/100)*this.products[existingProductIndex].discountPercentage)).toFixed(2));
        } else {
            var newProduct = {
                "id": data.id,
                "title": data.title,
                "description": data.description,
                "price": data.price,
                 "discountPercentage": data.discountPercentage,
                "brand": data.brand,
                "thumbnail": data.thumbnail,
                "quantity": 1,
                "total" : (data.price - ((data.price/100)*data.discountPercentage))
            }
            this.products.push(newProduct);
        }
        localStorage.setItem('products', JSON.stringify(this.products));
    }

    getProductFromLocalStorage() {
        const existingProducts = localStorage.getItem('products');
        if (existingProducts) {
            this.products = JSON.parse(existingProducts);
        }
        return this.products;
    }

    clearCart() {
        localStorage.removeItem('products');
    }

    removeProductById(id: number) {
        const existingProducts = localStorage.getItem('products');
        if (existingProducts) {
            this.products = JSON.parse(existingProducts);
        }
        const existingProductIndex = this.products.findIndex(product => product.id === id);
        if (existingProductIndex !== -1) {
            this.products.splice(existingProductIndex, 1);
        }
        localStorage.setItem('products', JSON.stringify(this.products));
    }





}