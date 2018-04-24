import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products: Product[] = [];

  subscription: Subscription;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public dataService: DataService
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');

    this.subscription = this.dataService.getProducts()
        .subscribe ( products => {
          // products is a collection of json objects
           this.products = products;
        }, error => {
          alert(`Error ${error.status} ${error.statusText} `);
        })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
