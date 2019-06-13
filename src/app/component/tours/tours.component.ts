import { Component, OnInit } from '@angular/core';
import { TourObject } from 'src/app/model/tour-object';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  public tourobject = TourObject; 

  constructor() { }

  ngOnInit() {
  }

  
}
