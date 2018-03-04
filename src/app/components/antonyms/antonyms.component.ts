import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-antonyms',
  templateUrl: './antonyms.component.html',
  styleUrls: [ './antonyms.component.scss' ]
})

export class AntonymsComponent implements OnInit {

  word: string;
  antonyms: any;

  constructor( private _httpService: HttpService ) { }

  ngOnInit() {}

  searchAntonyms( word ) {
    this._httpService.getAntonyms(word)
      .subscribe(( response ) => {
        this.antonyms = response['antonyms'];
      });
  }

}
