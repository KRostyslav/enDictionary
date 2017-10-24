import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'app works!';
  lang = 'en';

  constructor( private translate: TranslateService ) {
    // translate.addLangs([ 'en', 'ua' ]);
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  setLanguage() {
    // this.translate.use(this.lang);
  }
}
