import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  coins = 10;
  
  constructor(private _httpClient :  HttpClient) { }

  shareCoins(cb) {
    cb(this.coins);
  }

  addToCoins(num) {    
    return this.coins += num;
  }

}
