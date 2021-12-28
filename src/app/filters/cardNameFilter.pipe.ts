import { Pipe, PipeTransform } from '@angular/core';
import { Proizvod } from '../redux/cart.model';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {

  transform(list: Proizvod[], filterText: string): any {
    return list ? list.filter(item => item.stanje.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}