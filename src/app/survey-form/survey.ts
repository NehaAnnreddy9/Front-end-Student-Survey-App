//Declaring a Survey class to be used in the survey-form.component.ts 
export class Survey{
    constructor(){}
  
    firstName : string = '';
    lastName : string = '';
    streetAddress : string = '';
    city : string = '';
    state : string = '';
    zip : number = 0;
    phone : string = '';
    email : string = '';
    date : string = '';
    likes_temp : boolean[] = [false,false,false,false,false,false];
    likes : string = '';
    interest : string = ''; 
    recommendationLevel : string = '';
    raffleNumbers : string = '';
    comments: string = ''
  }
