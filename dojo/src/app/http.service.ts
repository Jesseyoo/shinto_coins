import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  coins = 10;
  ledger = [];
  count : number = 0;

  constructor(private _httpClient :  HttpClient) { }

  shareCoins(cb) {
    cb(this.coins);
  }

  shareLedger(cb) {
    cb(this.ledger);
  }

  addToCoins(actionName, num) {
    this.coins += num;
    this.ledger.push({_id: this.count ,action: `${actionName}`, amount: `${num}`, current: `${this.coins}`})
    this.count += 1;
    return this.coins;
  }

  getTrans(_id) {
    return this.ledger[_id];
  }

}
