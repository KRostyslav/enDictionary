import {NgModule} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {FormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';
import {SynonymsComponent} from './synonyms.component';
import {SynonymsRouter} from './synonyms.router';

@NgModule({
  declarations: [ SynonymsComponent ],
  imports: [
    FormsModule,
    CommonModule,
    SynonymsRouter ],
  providers: [ HttpService ]
})
export class SynonymsModule {
}
