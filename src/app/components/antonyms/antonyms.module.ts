import {NgModule} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {FormsModule} from '@angular/forms';

import {AntonymsRouter} from './antonyms.router';
import {AntonymsComponent} from './antonyms.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ AntonymsComponent ],
  imports: [
    FormsModule,
    CommonModule,
    AntonymsRouter ],
  providers: [ HttpService ]
})
export class AntonymsModule {
}
