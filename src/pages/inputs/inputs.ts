import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InputsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface User {
  username: string;
  password: string;
  bday: Date
}

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {

  user: User = {username: '',
                password: '',
                bday: new Date()}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

  save() {
    console.log("Save clicked", this.user)
  }

}
