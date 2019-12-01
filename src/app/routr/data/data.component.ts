import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  thisData: string
  constructor(public shuki: ActivatedRoute) { }

  ngOnInit() {
    this.shuki.data.subscribe(data => this.thisData = data.ss)
  }

}
