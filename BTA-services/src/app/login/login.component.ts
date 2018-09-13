'use strict'

import { Component, OnInit } from '@angular/core';
import {Routes, RouterLink, RouterLinkWithHref} from '@angular/router';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {DataService} from 'src/app/services/data.service'
import { Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { busDetails } from 'src/app/data';
import {DashboardComponent} from  'src/app/dashboard/dashboard.component';


@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


 constructor(private router: Router ,
              private route: ActivatedRoute,
              private http: HttpClient,
              private dataService : DataService) { }

 ngOnInit() {
 
     this.router.navigateByUrl('login');
  
  

   var radio_button1=document.getElementById("radio1");
   var radio_button2=document.getElementById("radio2");
   var arrival=<HTMLInputElement>document.getElementById("arrival");
   
   radio_button1.addEventListener("click",function(){
   arrival.disabled=true;
   arrival.value="dd/mm/yyyy";
   });

    radio_button2.addEventListener("click",function(){
       arrival.disabled=false; 
    });   

 }
    validation()
  {  
     var s=<HTMLInputElement>document.getElementById("source");
     var d=<HTMLInputElement>document.getElementById("destination");
     var t=<HTMLInputElement>document.getElementById("departure");
   
     DataService.JSONObj.source = s.value;
     DataService.JSONObj.destination = d.value;
     DataService.JSONObj.date = t.value;
     
       
 

    if((DataService.JSONObj.source == "") || (DataService.JSONObj.destination =="") || (DataService.JSONObj.date =="")){
      
      var h=<HTMLBodyElement>document.getElementById("h");
      h.innerText="* Please fill all the fields";
      this.router.navigateByUrl('login');
      
    }
    else{
    
     if((DataService.JSONObj.source ) == (DataService.JSONObj.destination )){

       var h=<HTMLBodyElement>document.getElementById("h");
       h.innerText="* Destination cannot be same as source";
       this.router.navigateByUrl('login');
     }
   
    else{
       
      this.router.navigateByUrl('login/dashboard');
      
    }
    }

    
  }
}
