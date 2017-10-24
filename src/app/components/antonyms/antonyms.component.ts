import {Component, OnInit, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-antonyms',
  templateUrl: './antonyms.component.html',
  styleUrls: [ './antonyms.component.css' ]
})

export class AntonymsComponent implements OnInit {

  word: string;
  antonyms: any;

  constructor( private http: HttpService ) { }

  ngOnInit() {}

  searchAntonyms( word ) {
    this.http.getAntonyms(word)
      .then(( response ) => {
        this.antonyms = response;
      });
  }

}
