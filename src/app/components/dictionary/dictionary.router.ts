import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './dictionary.component';


const DICTIONARY_ROUTER: Routes = [
  {
    path: '',
    component: DictionaryComponent
  }
];

export const DictionaryRouter = RouterModule.forChild(DICTIONARY_ROUTER);
