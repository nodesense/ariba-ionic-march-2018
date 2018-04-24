import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { File} from '@ionic-native/file';

/**
 * Generated class for the FilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-files',
  templateUrl: 'files.html',
})
export class FilesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private file: File
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesPage');
  }

  checkFiles() {
    this.file.checkDir(this.file.dataDirectory, 'data')
    .then(_ => console.log('Directory exists ', _))
    .catch(err => console.log('Directory doesnt exist'));

  }

}
