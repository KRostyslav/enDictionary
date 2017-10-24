import {Component, OnInit, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const URL = process.env.ApiUrl;
const KEY = process.env.MashapeKey;

let options = {};

@Injectable()
export class HttpService {

  data: any;
  body: any;
  words: any;

  constructor( private http: Http ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', KEY);
    options = new RequestOptions({headers: headers});
  }

  getWordDescription( word ): Promise<any> {
    return this.http.get(URL + word, options)
      .toPromise()
      .then(( response: Response ) => {
        this.data = response;
        this.body = JSON.parse(this.data._body);
        return this.body;
      })
      .catch(this.handleError);
  }

  getSynonyms( word ): Promise<any> {
    return this.http.get(URL + word + '/synonyms', options)
      .toPromise()
      .then(( response: Response ) => {
        this.data = response;
        this.body = JSON.parse(this.data._body);
        this.words = this.body.synonyms;
        return this.words;
      })
      .catch(this.handleError);
  }

  getAntonyms( word ): Promise<any> {
    return this.http.get(URL + word + '/antonyms', options)
      .toPromise()
      .then(( response: Response ) => {
        this.data = response;
        this.body = JSON.parse(this.data._body);
        this.words = this.body.antonyms;
        return this.words;
      })
      .catch(this.handleError);
  }

  getRhymes( word ): Promise<any> {
    return this.http.get(URL + word + '/rhymes', options)
      .toPromise()
      .then(( response: Response ) => {
        this.data = response;
        this.body = JSON.parse(this.data._body);
        this.words = this.body.rhymes.all;
        return this.words;
      })
      .catch(this.handleError);
  }

  private handleError( error: any ) {
    console.error('An error occurred', error); // for demo purposes only
    // return Promise.reject(error.message || error);
  }

}
