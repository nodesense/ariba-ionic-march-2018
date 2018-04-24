import { Component,
         Input, 

         Output, 
         EventEmitter

} from '@angular/core';

export interface Address {
  city: string;
  state: string;
}

/**
 * Generated class for the AddressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-address', // naming convension -
  templateUrl: 'address.html'
})
export class AddressComponent {

  // property binding, accept param from parent comp
  @Input()
  address: Address;

  @Input()
  title: string; 


  // event binding (eventName) (contactEvent)
  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();


  text: string;

  constructor() {
    console.log('Hello AddressComponent Component');
    this.text = 'Hello World';
  }

  contact() {
      // call the parent method, pass data
      // child to parent
      // fire event, publish the value
      // emit calls next to publish the value
      // parent should subscribe 
      this.contactEvent.emit(this.address);
  }

}
