import {RouterModule, Routes} from '@angular/router';

import {SynonymsComponent} from './synonyms.component';

const SYNONYMS_ROUTER: Routes = [
  {
    path: '',
    component: SynonymsComponent
  }
];

export const SynonymsRouter = RouterModule.forChild(SYNONYMS_ROUTER);
