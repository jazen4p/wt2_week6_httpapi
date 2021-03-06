import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  users = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.students = this.dataService.getStudents();
    this.dataService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
      console.log(this.users);
    });
  }
}

// https://pokeapi.co/api/v2/pokemon
