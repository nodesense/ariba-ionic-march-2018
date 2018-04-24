import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CodePush } from '@ionic-native/code-push';


import { Device } from '@ionic-native/device';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';




import { File } from '@ionic-native/file';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
 
import {AboutPage} from "../pages/about/about";
import { AlertsPage } from '../pages/alerts/alerts';
import { InputsPage } from '../pages/inputs/inputs';
import { DeviceInfoPage } from '../pages/device-info/device-info';
import { FilesPage } from '../pages/files/files';
import { GeoPage } from '../pages/geo/geo';

import { CameraPage } from '../pages/camera/camera';
import { DataService } from '../services/data.service';
import { CartPage } from '../pages/cart/cart';
import { PowerPipe } from '../pipes/power.pipe';
import { TabsPage } from '../pages/tabs/tabs';
import { MyMenu } from '../directives/my-menu';
import { LikeComponent } from '../components/like/like';
import { AddressComponent } from '../components/address/address';


// 4.3
import {HttpClientModule} from '@angular/common/http';
import { ProductsPageModule } from '../pages/products/products.module';
import { LoginComponent } from '../components/login/login';


@NgModule({
  declarations: [
    // all components, pipe, directive goes here
    MyApp,
    HomePage, 
    AboutPage,
    ContactPage,
    CartPage,
    PowerPipe, // Not for entry component
    GeoPage,
    MyMenu, // Directive, Not for entry component

    LikeComponent, // not for entry since this is not page
    AddressComponent, // not for entry component
 
    LoginComponent,






    TabsPage,



    AlertsPage,
    InputsPage,
    DeviceInfoPage,
    FilesPage,
    
    CameraPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ProductsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // All page components

    // setRoot(PageClassName)
    // nav.push(PageClassName)
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    CartPage,
    GeoPage,

    LoginComponent,

    
    TabsPage,


    AlertsPage,
    InputsPage,
    DeviceInfoPage,
    FilesPage,
   
    CameraPage
  ],
  providers: [
    // all services goes here
    DataService,
    Device,
    Geolocation,
    Camera,
    CodePush,

    
    
    File,
    

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
