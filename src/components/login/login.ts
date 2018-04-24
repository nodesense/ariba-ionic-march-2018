import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  loginData: { username?: string, 
               password?: string} = {};

  text: string;

  constructor(private dataService: DataService) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }

  login() {
    // alert (this.loginData.username);

    this.dataService.authenticate(this.loginData)
        .subscribe ( result => {
            let token = result.token;
            alert(token);
            this.dataService.loginStatus = true;
            this.dataService.token = token;
        });

  }

}
