import { cardCardinality } from "./card-cardinality";
import { cardType } from "./card-type";

export class CardModel {
    image: string;
    type: cardType;
    duration: number;
    title: string;
    subtitle: string;
    cardinality: cardCardinality;
}