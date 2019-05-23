import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavExtraService {

  extras: Array<String>;

  constructor() { }

  public setExtras(data){
    this.extras = data;
  }

  public getExtras(){
    return this.extras;
  }
}
