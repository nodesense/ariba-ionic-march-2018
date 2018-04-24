import {Injectable} from '@angular/core';

import {Subject} from "rxjs/Subject";

// Ajax service
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';

// services
// business logic, communicatin, data sharing

export interface CartItem {
    id: number;
    name: string;
    price: number;
    icon: string;
    released: Date;
}

@Injectable()
export class DataService {
    counter: number = 100;

    increment() {
        this.counter ++;
    }

    decrement() {
        this.counter--;
    }

    getCounter() {
        return this.counter;
    }

    constructor(private http: HttpClient) {
        console.log("DataService created");
    }

    private cartItems: CartItem[] = [];

    // Observable
    cartItemsSource: Subject<CartItem[]> = new Subject();


    // cart functionalities
    addItem(item: CartItem) {
        this.cartItems.push(item);

        // Publish, shall call subscribe
        this.cartItemsSource.next(this.cartItems);
    }

    removeItem(id: number) {
        //TODO

         // Publish
         this.cartItemsSource.next(this.cartItems);
    }

    empty() {
        this.cartItems = [];

         // Publish
         this.cartItemsSource.next(this.cartItems);
    }

    getItems() {
        return this.cartItems;
    }

    // Get product data


    getProducts(): Observable<Product[]> {
        let options = {
            headers: {
                Authorization: "JWT " + this.token
            }
        } 
        // android 10.0.2.2
        return this.http.get<Product[]>("http://localhost:7070/secured/api/products", options)
    }

    loginStatus : boolean = false;
    token : string = '';
    
    authenticate(loginData: any): Observable<any> {
        return this.http.post<any> ("http://localhost:7070/oauth/token", 
                                    loginData)
    }


}