import { Component, Input } from '@angular/core';
import { CardModel } from '../../../models/card-model';
import { BaseCard } from '../base-card';

@Component({
  selector: 'lib-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements BaseCard {

  @Input()
  public model: CardModel;

}
