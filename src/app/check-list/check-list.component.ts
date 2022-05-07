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

  url: string = 'http://a50b45c7f4e9e476286c18d644cd540d-1523361530.us-east-1.elb.amazonaws.com/api/v1/survey'
  surveys: Survey[]=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getSurvey() //Function to receive the survey form data from the server
    .subscribe(
      res=>{
        console.log(res);
        this.surveys = res['body'];
      },
      error=>alert('Not able to request the content\n') //A pop-up to let the user know that the data could not be accessed
      );
  }

  getSurvey():Observable<any>{
    return this.http.get(this.url, {observe:'response'});//HTTP get method to receive the data from the server
  }

}
