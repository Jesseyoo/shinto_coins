import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
  title = "Buy Coins";
  coins : any;

  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this._httpService.shareCoins(data => {
      this.coins = data;
    });
  } 

  buyCoins() {
    console.log(`purchased ShintoCoins`);
    this.coins = this._httpService.addToCoins(this.title, 13);
  }

}
