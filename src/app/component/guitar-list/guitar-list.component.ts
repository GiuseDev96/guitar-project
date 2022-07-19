import { Component, OnInit } from '@angular/core';
import { GUITAR_LIST } from '../db/database';
import { Guitar } from '../model/guitar-model';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css'],
})
export class GuitarListComponent implements OnInit {
  guitars: Guitar[] = GUITAR_LIST;
  constructor() {}

  ngOnInit() {}
}
