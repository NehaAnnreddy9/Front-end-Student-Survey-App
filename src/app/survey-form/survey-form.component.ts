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
  url: string = 'https://560a-173-66-0-82.ngrok.io/backend/api/v1/survey'
  message:Survey = new Survey()
  likes_value:string[] = ['Students','Location','Campus','Dorm rooms','Atmosphere','Sports'] 
  today: string = new Date().toDateString();
  
  constructor( private http:HttpClient, private router:Router) { }
  
  ngOnInit(): void {
  }

  

  likesTake (b:boolean[]):string{
    let temp='';
    b.forEach((value, index) => {
      value?(temp=temp+'  '+this.likes_value[index]):temp=temp;
    });
    return temp;
  }
  checkInfo():boolean{
    return this.message.firstName==''||this.message.lastName==''||this.message.streetaddress==''||this.message.email==''||this.message.city==''||
    this.message.state==''||this.message.phone==''||this.message.date==''||this.message.zip==0;
  }

  onClickSubmit():void {  
    //this.message.date = this.today;
    let body ="firstName="+this.message.firstName+"&"
            +"lastName="+this.message.lastName+"&"
            +"streetaddress="+this.message.streetaddress +"&"
            +"city="+this.message.city+"&"
            +"state="+this.message.state+"&"
            +"zip="+this.message.zip+"&"
            +"phone="+this.message.phone+"&"
            +"email="+this.message.email+"&"
            +"date="+this.message.date+"&"
            +"likes="+this.likesTake(this.message.likes_temp)+"&"
            +"interest="+this.message.interest+"&"
            +"recommendationLevel="+this.message.recommendationLevel+"&"
            +"raffleNumbers="+this.message.raffleNumbers+"&"
            +"comments="+this.message.comments;


    
    if(this.checkInfo()){
      alert('Please fill in all the required(*) fields\n\n\n');
    }
    else{
      //alert("reached");
      this.http.post('https://560a-173-66-0-82.ngrok.io/backend/api/v1/survey',body).subscribe(
        succeed=>{
          alert('Form submitted.\n'  + body);      
          this.router.navigate(['/app-home']);
        },
        error=>{
          alert('Failed to submit the form\n' + body);
        }
      );
      return;
    }  
      
  }
  cancel():void{
    alert("Are you sure you want to cancel?")
    this.router.navigate(['/app-home'])
  }
}