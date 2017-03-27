import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyString'
})
export class MultiplyStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result='';
    for (var i=0; i< args; i++) {
      result +=value;
    }
    return result;
  }

}
