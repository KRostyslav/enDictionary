import {Component, OnInit, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: [ './synonyms.component.css' ]
})

export class SynonymsComponent implements OnInit {

  word: string;
  synonyms: any;

  constructor( private http: HttpService ) { }

  ngOnInit() {}

  searchSynonyms( word ) {
    this.http.getSynonyms(word)
      .then(( response ) => {
        this.synonyms = response;
      });
  }

}
