import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  title = "Sell Coins";
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

  sellCoins() {
    console.log(`sold ShintoCoins`);
    this.coins = this._httpService.addToCoins(this.title, -20);
  }

}
