import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../class/bean/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<User>, search: string): any {
    try {
      if (!value) {return []; }
      if (!search) {return value; }

      search = search.toLowerCase();

      return value.filter(user => {
        return user.username.toLowerCase().replace(/\s/g, '').includes(search.replace(/\s/g, ''));
      });

    } catch (error) {

    }
  }

}
