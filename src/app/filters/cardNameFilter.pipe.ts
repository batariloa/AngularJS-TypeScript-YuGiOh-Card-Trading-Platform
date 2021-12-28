import { Pipe, PipeTransform } from '@angular/core';
import { Proizvod } from '../redux/cart.model';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {

  transform(snapshotArr: any, searchValue: string) {
    if (!snapshotArr) {
      return [];
    }
    if (!searchValue) {
      return snapshotArr;
    }
    if (snapshotArr && searchValue) {
      return snapshotArr.filter((item:any) => item.karta.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
  }
}