import { Component,
         ViewChild, // angular, access template vars in ts 
         ElementRef, // Wrapper on top of real dom
        } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';

import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 interface Address {
    // mandatory
    city: string;
    // optional  ?
    state?: string;
 }


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  // address is undefined
  address: Address; 

  // <input #nameInput >
  // access reference variable in component
  @ViewChild("nameInput")
  nameInput: ElementRef;

  //after view loaded, search for nameInput,
  // assign reference to component

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public dataService: DataService,
              public http: HttpClient
            ) {
  }

  // callback
  // called after view initialized, life cycle
  // api calls
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');

    // nativeElement is real dom
    // nativeElement may be Android/ioS TextInput  native
    this.nameInput.nativeElement.focus();
    this.nameInput.nativeElement.value = "Ionic";

    // called after 3 seconds, only one
    setTimeout( () => {
       this.address = {city: 'BLR', state: 'KA'};
    }, 3000);

  }

  fetch() {
    this.http.get("http://localhost:7070/api/products")
    .subscribe ( (items: any[]) => {
      alert("Total " + items.length);
    })
  }

}
