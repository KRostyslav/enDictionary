import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ViewComponent} from './components/view/view.component';
import {TestimonialComponent} from './components/testimonial/testimonial.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {WordsComponent} from './components/words/words.component';
import {DictionaryComponent} from './components/dictionary/dictionary.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {SynonymsComponent} from './components/synonyms/synonyms.component';
import {AntonymsComponent} from './components/antonyms/antonyms.component';
import {RhymesComponent} from './components/rhymes/rhymes.component';
import {HttpService} from './services/http.service';
import {appRouter} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ViewComponent,
    TestimonialComponent,
    JumbotronComponent,
    WordsComponent,
    DictionaryComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    appRouter
  ],
  providers: [
    HttpService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
