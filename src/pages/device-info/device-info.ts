import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Device } from '@ionic-native/device';
 

@Component({
  selector: 'page-device-info',
  templateUrl: 'device-info.html',
})
export class DeviceInfoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public device: Device) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceInfoPage');
  }

  deviceInfo() {
    console.log("Device Model ", this.device.model);
    console.log("Platform ", this.device.platform);
    console.log("UUID ", this.device.uuid);
    console.log("OS Version ", this.device.version);
    console.log("Manufacturer ", this.device.manufacturer);
    console.log("Serial ", this.device.serial);
    console.log("Is Emulator  ", this.device.isVirtual);
  }

}
