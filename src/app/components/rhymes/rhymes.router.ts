import {RouterModule, Routes} from '@angular/router';
import {RhymesComponent} from './rhymes.component';

const RHYMES_ROUTER: Routes = [
  {
    path: '',
    component: RhymesComponent
  }
];

export const RhymesRouter = RouterModule.forChild(RHYMES_ROUTER);
