import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Camera, CameraOptions  } from '@ionic-native/camera';

/**
 * Generated class for the GeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-geo',
  templateUrl: 'geo.html',
})
export class GeoPage {

  base64Image: string;
  
  position: Geoposition;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public geoLocation: Geolocation  ,
              private camera: Camera
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoPage');
    this.getLocation();
  }

  getLocation() {
    this.geoLocation
        .getCurrentPosition()
        .then ( position => {
           this.position = position;
        })
  }

  capture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
      alert("Error " + err);
    });
  }

}
