import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // all public
  title: string = "About";
 
  info: any = {};

  
  show: boolean = true;
  members: string[] = ['Member 1', 'Member 2'];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams
        ) {
    this.info = navParams.get("info");
  }
 
  addMember() {
    this.members.push("Member " + Math.random());
  }

  empty() {
    this.members = [];
  }

}
