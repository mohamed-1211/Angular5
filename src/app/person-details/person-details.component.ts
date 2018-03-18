import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
  inputs: ['personItem']
})
export class PersonDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
