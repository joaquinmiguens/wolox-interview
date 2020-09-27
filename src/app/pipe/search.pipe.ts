import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(items: Candidate[], searchText: string): Candidate[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    const authorArray = items.filter(($item: Candidate) => {
      return $item.author.toLocaleLowerCase().includes(searchText);
    });
    const typeArray = items.filter(($item: Candidate) => {
      return $item.type.toLocaleLowerCase().includes(searchText);
    });
    let newArray = authorArray.concat(typeArray);
    newArray = [...new Set([...authorArray, ...typeArray])];
    return newArray;
  }
}
