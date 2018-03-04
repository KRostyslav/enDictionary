import {RouterModule, Routes} from '@angular/router';

import {AntonymsComponent} from './antonyms.component';

const ANTONYMS_ROUTER: Routes = [
  {
    path: '',
    component: AntonymsComponent
  }
];

export const AntonymsRouter = RouterModule.forChild(ANTONYMS_ROUTER);
