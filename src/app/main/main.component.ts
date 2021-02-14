import { Component } from '@angular/core';
import { cardCardinality, CardModel, cardType } from 'projects/simple-carousel/src/public-api';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public static counter = 0;
  public fetchCards1(chunkSize: number): Promise<CardModel[]> {
    const modelArray: CardModel[] = [];
    const count = chunkSize*Math.floor((Math.random() * 2) + 1);  // returns random * chunkSize
    for(let i = 0; i < count; ++i) {
      const random = Math.floor((Math.random() * 4));
      let type: cardType;
      switch(random) {
        case(0): {
          type = cardType.elearning
          break;
        }
        case(1): {
          type = cardType.learning_plan
          break;
        }
        case(2): {
          type = cardType.playlist
          break;
        }
        case(3): {
          type = cardType.video
          break;
        }
      }
      modelArray.push({
        image: `https://picsum.photos/id/${MainComponent.counter}/200/150`,
        type,
        duration: Math.random()*10000000,
        title: `Card number ${MainComponent.counter++}`,
        subtitle: Math.random() > 0.5? "This is a subtitle" : null,
        cardinality: Math.random() > 0.5? cardCardinality.single : cardCardinality.collection,
      })
    }

    const array$ = from([modelArray]).pipe(concatMap(item => of(item).pipe(delay(1000)))).toPromise();

    return array$;
  };

}
