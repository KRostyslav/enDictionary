import {Component, OnInit, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: [ './view.component.css' ]
})

export class ViewComponent implements OnInit {

  words: any;
  word: any;
  data: any;
  body: any;

  result: any;
  pronunciation: any;

  constructor( private http: Http ) {}

  ngOnInit() {
  }

  public getDescription() {
  }
}
