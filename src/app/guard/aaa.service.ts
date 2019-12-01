import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AaaService implements CanActivate {

  canActivate() {
    let aa = 'u cant log in'
    console.log(aa);
    return false
  }

  constructor() { }
}
