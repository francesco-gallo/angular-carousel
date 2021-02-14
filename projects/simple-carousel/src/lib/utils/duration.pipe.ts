import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  // transform ms into duration
  transform(value: number): string {
    let string = "";
    value /= 1000 //ms to seconds
    value = Math.floor(value);

    let minutes = Math.floor(value / 60);

    if (value < 3600) {  // less than 1h
      const seconds = value - (minutes * 60);
      if (seconds < 10) {
        string = `${minutes}:0${seconds}`;
      } else {
        string = `${minutes}:${seconds}`;
      }
    } else {
      const hours = Math.floor(minutes / 60);
      minutes = minutes - (hours * 60);
      string = `${hours}h ${minutes}m`;
    }
    return string;
  }

}
