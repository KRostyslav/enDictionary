// определение маршрутов
import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './components/dictionary/dictionary.component';
import {SynonymsComponent} from './components/synonyms/synonyms.component';
import {HomeComponent} from './components/home/home.component';
import {RhymesComponent} from './components/rhymes/rhymes.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ModuleWithProviders} from '@angular/core';

const ROUTER: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {
    path: 'synonyms',
    loadChildren: './components/synonyms/synonyms.module#SynonymsModule'
  },
  {
    path: 'antonyms',
    loadChildren: './components/antonyms/antonyms.module#AntonymsModule'
  },
  {
    path: 'rhymes',
    loadChildren: './components/rhymes/rhymes.module#RhymesModule'
  },
  {path: '**', component: NotFoundComponent}
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(ROUTER);
