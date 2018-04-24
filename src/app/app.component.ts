import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

import { TabsPage } from '../pages/tabs/tabs';
import { CodePush, InstallMode, SyncStatus } from '@ionic-native/code-push';
import { ProductsPage } from '../pages/products/products';
import { LoginComponent } from '../components/login/login';
 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // nav reference to object of ion-nav 
  @ViewChild(Nav) 
  nav: Nav;

  rootPage:any = HomePage;

  appMenus: any[] = [
    {
      title: 'Home',
      component: HomePage
    },

    {
      title: 'About',
      component: AboutPage
    },

    {
      title: "Products",
      component: ProductsPage
    },
    {
      title: "Login",
      component: LoginComponent
    },
    
    // },
    // {
    //   title: 'Contact',
    //   component: ContactPage
    // }
  ]

  onMenuSelected(menu: any) {
    // load another page
    this.menuController.close();
    // Only one view as root
    //this.nav.setRoot(menu.component, { info: {city: 'BLR'}})
    
    // Stack navigator
    this.nav.push(menu.component, { info: {city: 'BLR'}});

  }

  //rootPage: any = TabsPage;

  

  //rootPage:any = ContactPage;

   // rootPage: any = AboutPage;


   
  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public menuController: MenuController,
              private codePush: CodePush,
            ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
    });
    this.checkCodePush(); 
  }

  checkCodePush() {
    
    this.codePush.sync({
     updateDialog: {
      appendReleaseDescription: true,
      descriptionPrefix: "\n\nChange log:\n"   
     },
     installMode: InstallMode.IMMEDIATE
  }).subscribe(
    (data) => {
     console.log('CODE PUSH SUCCESSFUL: ' + data);
     alert("Code Push success " + data);
     
    },
    (err) => {
     console.log('CODE PUSH ERROR: ' + err);
     alert("Code Push error " + err);
    }
  );
 }

}

