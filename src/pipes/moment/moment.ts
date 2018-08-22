import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
import 'moment/locale/pt-br';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {

  constructor() {
    moment.locale('pt-BR');
  }
  transform(date: string, format: string) {
    return moment(date).format(format);
  }
}
