import {Component, OnInit, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-rhymes',
  templateUrl: './rhymes.component.html',
  styleUrls: [ './rhymes.component.css' ]
})
export class RhymesComponent implements OnInit {

  word: string;
  rhymes: any;

  constructor( private http: HttpService ) { }

  ngOnInit() {}

  searchRhymes( word ) {

    this.http.getRhymes(word)
      .then(( response: Response ) => {
        this.rhymes = response;
      });
  }

}
