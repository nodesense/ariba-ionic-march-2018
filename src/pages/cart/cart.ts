  import { Component } from '@angular/core';
  import { NavController, 
           NavParams,
          ActionSheetController,
          AlertController
          } from 'ionic-angular';
  import { DataService, CartItem } from '../../services/data.service';

  // For unsubscribe
  import {Subscription} from "rxjs/Subscription";

  /**
   * Generated class for the CartPage page.
   *
   * See https://ionicframework.com/docs/components/#navigation for more info on
   * Ionic pages and navigation.
   */

  @Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
  })
  export class CartPage {

   

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public dataService: DataService,
                public actionSheetCtrl: ActionSheetController,
                public alertController: AlertController
              ) {

      this.items = this.dataService.getItems();
    }

    // class member
    subscription: Subscription; // to subscribe
    timerHandle: any; //to stop timer

    ionViewDidLoad() {
      
      console.log('ionViewDidLoad CartPage');

      //Subscribe for Rxjs Subject

      //when  you call next(items)
      // susbcribe called
      this.subscription = this.dataService
          .cartItemsSource
          .subscribe ( (cartItems)=> {
              console.log("CART SUBS", cartItems);
              this.items = cartItems;
          })

      // Timer 
      this.timerHandle = setInterval( () => {
        console.log(" CART " + Math.random());
      }, 2000);

    }

    // class member
    items: CartItem[] = [];

    addItem() {
      let id = Math.ceil(Math.random() * 1000);

      let item: CartItem = {
        id: id,
        name: `Product ${id}`, // es6 backquote, template string 
        price: Math.ceil(Math.random() * 100),
        icon: id % 2 == 1? "phone-portrait" : "tablet-portrait",
        released: new Date() // current date time
        }

      this.dataService.addItem(item);

      //TODO: rxjs
      // pull the data

      //this.items = this.dataService.getItems();
    }

    empty() {
      this.dataService.empty();
      //this.items = this.dataService.getItems();
    }

    itemTapped(e: Event, item: CartItem) {
      console.log("Item Tapped ", e, item);
    }

    removeItem(e: Event, id: number) {
      console.log("Remove ", e, id);

      // cancel bubbling
      e.stopPropagation();

      this.dataService.removeItem(id);
    }


    // Angular method, called at the end
    // of the component life cycle
    ngOnDestroy() {
      console.log("CART DESTORY");
      this.subscription.unsubscribe();
      clearInterval(this.timerHandle);
    }

    actionSheet() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Cart Actions',
        buttons: [
         {
            text: 'Empty Cart',
            handler: () => {
              let alert = this.alertController.create({
                title: 'Are you sure?',
                subTitle: "Click OK to clear cart items",
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      this.empty();
                    }
                  },

                  "Cancel"
                ]
              });

              //this.empty();

              alert.present();
            }
          },
          {
            text: 'Checkout',
            handler: () => {
              alert("Checkout");
            }
          }
        ]});

       actionSheet.present();
    }

  }
