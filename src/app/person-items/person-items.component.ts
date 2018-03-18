import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-items',
  templateUrl: './person-items.component.html',
  styleUrls: ['./person-items.component.css'],
  inputs: ['personItem']
})
export class PersonItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
