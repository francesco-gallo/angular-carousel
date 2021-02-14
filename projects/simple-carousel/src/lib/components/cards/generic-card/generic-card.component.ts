import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from '../../../models/card-model';

@Component({
  selector: 'lib-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent {
  static width = 220;
  
  public model$: Observable<CardModel>
}
