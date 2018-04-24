import { Component } from '@angular/core';
import { NavController, Platform, MenuController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { AlertsPage } from '../alerts/alerts';
import { InputsPage } from '../inputs/inputs';
import { DeviceInfoPage } from '../device-info/device-info';
import { FilesPage } from '../files/files';
import { GeoPage } from '../geo/geo';
import { CameraPage } from '../camera/camera';
import { ContactPage } from '../contact/contact';
import { DataService } from '../../services/data.service';
import { CartPage } from '../cart/cart';
import { Device } from '@ionic-native/device';
import { Address } from '../../components/address/address';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = "Home";
  counter: number;

  address: Address = {
    city: 'BLR',
    state: 'KA'
  };


  appLikes: number = 10000;
  homeLikes: number = 1000;



  uuid: string;

  // NavController is a service
  // Injecting a service into component

  // Inject data service 
  constructor(public navCtrl: NavController,
              private dataService: DataService,
              public device: Device,
              public platform: Platform,
              public menu: MenuController
            ) {

      this.counter = this.dataService.getCounter();

      // document.addEventListener("deviceready", onDeviceReady, false);

      // function onDeviceReady() {
      //     alert("Cordova " + device.cordova);
      // }
    
  }


  // child to parent handler method
  // callback method, called on event only
  onContactHandler(address: Address) {
    alert(address.city);
  }

  up() {
    // this.counter++;
    this.dataService.increment();
    this.counter = this.dataService.getCounter();
  }

  down() {
    // this.counter--;
    this.dataService.decrement();
    this.counter = this.dataService.getCounter();
  }

  about() {
    // stack based navigation
    this.navCtrl.push(AboutPage, { info:  {city: 'Bangalore'} })
  }

  contact() {
    this.navCtrl.push(ContactPage);
  }


  ionViewDidLoad() {
   

    this.platform.ready()
    .then ( () => {
      this.uuid = this.device.uuid;
    })
     
  }

  cart() {
    this.navCtrl.push(CartPage);
  }


  showDeviceInfo() {
    alert(`
        Platform: ${this.device.platform},
        "UUID": ${this.device.uuid},
        Is Simulatd: ${this.device.isVirtual}
    `)
  }


  geo() {
    this.navCtrl.push(GeoPage);
  }






  
  alerts() {
    this.navCtrl.push(AlertsPage, { info:  {city: 'Bangalore'} })
  }

  inputs() {
    this.navCtrl.push(InputsPage)
  }

  deviceMe() {
    this.navCtrl.push(DeviceInfoPage);
  }

  files() {
    this.navCtrl.push(FilesPage);
  }


  camera() {
    this.navCtrl.push(CameraPage);
  }
}
