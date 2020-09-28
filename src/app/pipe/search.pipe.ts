import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(
    items: Candidate[],
    searchText: string,
    order: string
  ): Candidate[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return this.sorting(items, order);
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
    return this.sorting(newArray, order);
  }

  sorting(items: Candidate[], order: string) {
    if (order === 'Ascendente') {
      const sortingArray = items.sort((first: Candidate, second: Candidate) => {
        if (first.author < second.author) {
          return -1;
        }
        if (first.author > second.author) {
          return 1;
        }
        return 0;
      });
      return sortingArray;
    } else {
      const sortingArray = items.sort((first: Candidate, second: Candidate) => {
        if (first.author > second.author) {
          return -1;
        }
        if (first.author < second.author) {
          return 1;
        }
        return 0;
      });
      return sortingArray;
    }
  }
}
