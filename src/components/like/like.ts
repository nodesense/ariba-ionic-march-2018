import { Component,
         Input, 
         Output, 
         EventEmitter
} from '@angular/core';

/**
 * Generated class for the LikeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-like',
  templateUrl: 'like.html'
})
export class LikeComponent {

  // [] - property
  @Input()
  likes: number;

  // () - event

  // two way binding [(likes)]
  // the output name should be inputName + "Change" => likesChange
  @Output()
  likesChange:EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Hello LikeComponent Component');
     
  }

  up() {
    this.likesChange.emit( this.likes  + 1);
  }


  down() {
    this.likesChange.emit( this.likes  - 1);
  }

}
