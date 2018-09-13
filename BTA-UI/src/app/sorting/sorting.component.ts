import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service'
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  
source=DataService.JSONObj.source;
destination=DataService.JSONObj.destination;
date=DataService.JSONObj.date;
 
  constructor() { }

  ngOnInit() {
  }

}
