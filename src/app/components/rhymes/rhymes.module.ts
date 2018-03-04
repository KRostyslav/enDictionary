import {NgModule} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RhymesComponent} from './rhymes.component';
import {RhymesRouter} from './rhymes.router';

@NgModule({
  declarations: [ RhymesComponent ],
  imports: [
    FormsModule,
    CommonModule,
    RhymesRouter ],
  providers: [ HttpService ]
})
export class RhymesModule{
}
