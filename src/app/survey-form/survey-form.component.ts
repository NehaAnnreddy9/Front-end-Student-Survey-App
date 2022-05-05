import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Survey } from './survey';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { CheckboxRequiredValidator } from '@angular/forms';



@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})



export class SurveyFormComponent implements OnInit {
  url: string = 'http://aa6c37669b5574980ad761b3eb28e64d-1983505251.us-east-1.elb.amazonaws.com/api/v1/survey'
  message:Survey = new Survey()
  likes_value:string[] = ['Students','Location','Campus','Dorm rooms','Atmosphere','Sports'] 
  today: string = new Date().toDateString();
  
  constructor( private http:HttpClient, private router:Router) { }
  
  ngOnInit(): void {
  }

  

  likesTake (b:boolean[]):string{
    let temp='';
    b.forEach((value, index) => {
      value?(temp=temp+' '+this.likes_value[index]):temp=temp;
    });
    return temp;
  }
  checkInfo():boolean{
    return this.message.firstName==''||this.message.lastName==''||this.message.streetAddress==''||this.message.email==''||this.message.city==''||
    this.message.state==''||this.message.phone==''||this.message.date==''||this.message.zip==0;
  }

  onClickSubmit():void {  

    
    if(this.checkInfo()){
      alert('Please fill in all the required(*) fields\n\n\n');
    }
    else{
      //alert("reached");
      this.message.likes = this.likesTake(this.message.likes_temp);
      this.http.post(this.url, this.message).subscribe(
        succeed=>{// all good
          alert('Form submitted.\n' );      
          this.router.navigate(['/']);
        },
        error=>{
          if (error['status'] == 200) { // just a parsing error due to mimetype, all good
            alert('Form submitted.\n' );      
            this.router.navigate(['/']);
            // Something went wrong
          } else {
            alert('Failed to submit the form\n');
            this.router.navigate(['/']);
          }
         
        }
      );
      return;
    }  
      
  }
  cancel():void{
    alert("Are you sure you want to cancel?")
    this.router.navigate(['/'])
  }
}