import { Component } from '@angular/core';
import { NavController, 
         NavParams, 
         AlertController } from 'ionic-angular';


@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: [ {
        text: 'OK',
        handler: function() {
          console.log("OK Handler ");
        },
      }, {
        text: "Cancel",
        role: "cancel",
        handler: function () {
          console.log("Cancel handler")
        }
      }
      ]
    });
    
    alert.present()
    .then ( result => {
      console.log("Result ", result);
    })
  }

  showPrompt() {
        
      let alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
              {
                name: 'username',
                placeholder: 'Username'
              },
              {
                name: 'password',
                placeholder: 'Password',
                type: 'password'
              }
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              
              {
                text: 'Login',
                handler: data => {
                  console.log(data.username, data.password);

                  if (data.username == 'admin' && data.password == 'admin') {
                    // logged in!
                    console.log("All good");
                    return true;
                  } else {
                    // invalid login
                    console.log("Invalid login");
                    return false;
                  }
                }
              }
            ]
          });
          alert.present();
        }
  

}
