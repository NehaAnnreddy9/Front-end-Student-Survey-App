import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Survey } from './survey1';
import { Observable } from 'rxjs';
import { catchError, map, tap, finalize, retry } from 'rxjs/operators';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  url: string = 'https://560a-173-66-0-82.ngrok.io/backend/api/v1/survey'
  surveys: Survey[]=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getSurvey()
    .subscribe(
      res=>{
        console.log(res);
        this.surveys = res['body'];
      },
      error=>alert('Not able to request the content\n')
      );
  }

  getSurvey():Observable<any>{
    return this.http.get(this.url, {observe:'response'});
  }

}
