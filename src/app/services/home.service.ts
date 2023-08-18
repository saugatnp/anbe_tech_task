import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
    providedIn: "root"

})

export class HomeService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }


    getProductList(): Observable<any> {
        return this.http.get<any>("https://dummyjson.com/products");
    }

    console() {
        console.log("HomeService");
    }



}