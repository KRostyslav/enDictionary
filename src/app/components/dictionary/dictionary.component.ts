import {Component, OnInit, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: [ './dictionary.component.css' ]
})

export class DictionaryComponent implements OnInit {

  wordDictionary: string;
  body: any;
  results: any;
  pronunciation: any;
  frequency: any;

  constructor( private http: HttpService ) { }

  ngOnInit() {}

  search( wordDictionary ) {
    this.http.getWordDescription(wordDictionary)
      .then(( response ) => {
        this.body = response;
        this.results = this.body.results;
        console.log('body', this.body);
        this.pronunciation = this.body[ 'pronunciation' ];
        this.frequency = this.body[ 'frequency' ];
        console.log('pronunciation', this.pronunciation);
      });
  }

}
