import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPersons'
})
export class SearchPersonsPipe implements PipeTransform {

  transform(pipeData, pipeModifier:string): any {
    return pipeData.filter(item => {
      return (
        item['name'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
