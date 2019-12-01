import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public http:HttpClient,public activated:ActivatedRoute) { }
private api = 'https://jsonplaceholder.typicode.com/users/'
public user:any
  ngOnInit() {
    this.activated.params.subscribe(pram=>{
      let userId = pram.id
      this.http.get(this.api+userId).subscribe(u=>this.user=u)
    })
  }

}
