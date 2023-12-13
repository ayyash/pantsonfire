import { Injectable } from '@angular/core';
import { IListOptions } from '../models/list.model';
import { StateService } from '../utils/state.abstract';

@Injectable({ providedIn: 'root' })
export class ParamState extends StateService<IListOptions> {
   constructor() {
      super();
   }

}
