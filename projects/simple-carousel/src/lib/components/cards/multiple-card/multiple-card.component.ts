import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CardModel } from '../../../models/card-model';
import { BaseCard } from '../base-card';

@Component({
  selector: 'lib-multiple-card',
  templateUrl: './multiple-card.component.html',
  styleUrls: ['./multiple-card.component.scss']
})
export class MultipleCardComponent implements BaseCard {

  @Input()
  public model: CardModel;

}
