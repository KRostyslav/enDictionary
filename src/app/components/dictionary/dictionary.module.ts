import {NgModule} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {FormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';
import {DictionaryComponent} from './dictionary.component';
import {DictionaryRouter} from './dictionary.router';

@NgModule({
  declarations: [ DictionaryComponent],
  imports: [
    FormsModule,
    CommonModule,
    DictionaryRouter ],
  providers: [ HttpService ]
})
export class DictionaryModule {
}
