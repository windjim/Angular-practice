import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minGoYear'
})
export class MinGoYearPipe implements PipeTransform {

  transform(value: unknown, str:any, ...args:any[]): any {

    console.log(str)
    console.log(args.join(','))
    switch (value) {
      case 1:
        return `Monday ${args}`;
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "exception!";
    }

  }

}
