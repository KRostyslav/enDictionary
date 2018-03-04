import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

const URL = 'https://wordsapiv1.p.mashape.com/words/';
const KEY = '';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Mashape-Key': KEY
  })
};

@Injectable()
export class HttpService {

  data: any;
  body: any;
  words: any;

  constructor( private _http: HttpClient ) {
  }

  getWordDescription( word ) {
    return this._http.get(URL + word, httpOptions)
  }

  getSynonyms( word ) {
    return this._http.get(URL + word + '/synonyms', httpOptions)
  }

  getAntonyms( word ) {
    return this._http.get(URL + word + '/antonyms', httpOptions)
  }

  getRhymes( word ) {
    return this._http.get(URL + word + '/rhymes', httpOptions)
  }

}
