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
  styleUrls: [ './rhymes.component.scss' ]
})
export class RhymesComponent implements OnInit {

  word: string;
  rhymes: any;

  constructor( private http: HttpService ) { }

  ngOnInit() {}

  searchRhymes( word ) {

    this.http.getRhymes(word)
      .subscribe(( response ) => {
        this.rhymes = response['rhymes']['all'];
      });
  }

}
