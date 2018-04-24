import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public base64Image: string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  capture() {
      alert("CApture");
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
        console.log("Error ", err);
        alert("ERROR " + JSON.stringify(err));
      });
  }

}
