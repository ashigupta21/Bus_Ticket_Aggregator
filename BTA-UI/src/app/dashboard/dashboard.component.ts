'use strict'

import { Component, OnInit } from '@angular/core';
import {Routes, RouterLink, RouterLinkWithHref} from '@angular/router';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {DataService} from 'src/app/services/data.service'

import { Subscriber } from 'rxjs';


import { HttpClientModule } from '@angular/common/http';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { busDetails } from 'src/app/data';
var x = {};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  public data : any

source=DataService.JSONObj.source;
destination=DataService.JSONObj.destination;
date=DataService.JSONObj.date;
 
 
  static dataObj = { };


  constructor(private router: Router ,
              private route: ActivatedRoute,
              private http: HttpClient,
              private dataService : DataService) { }

  ngOnInit(){

    this.dataService.postData()
    .subscribe(data => {
     console.log("object", data['Detail']);
     DashboardComponent.dataObj = data['Detail'];
    console.log(DashboardComponent.dataObj);
    this.data = DashboardComponent.dataObj;
    console.log(this.data);
     });
          //console.log(x);
    var radio_button1 = document.getElementById("radio1");
    var radio_button2 = document.getElementById("radio2");
    var arrival = <HTMLInputElement>document.getElementById("destDate");

    radio_button1.addEventListener("click", function () {
      arrival.disabled = true;
      arrival.value="dd/mm/yyyy";
    });
    radio_button2.addEventListener("click", function () {
     arrival.disabled = false;

   });

  }

  
}

