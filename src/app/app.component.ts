import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: string;
  persons: any;
  currentPerson: object;

  /* To show all events
  in html template, add (click) = showPerson($event)
  showPerson(e){
    console.log(e);
  }*/

  showPerson(item){
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentPerson = item;
  }

  constructor( private http: HttpClient){
    
  } // End Constructor

  ngOnInit() : void{
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.persons = data;
      }
    )
  }
}
