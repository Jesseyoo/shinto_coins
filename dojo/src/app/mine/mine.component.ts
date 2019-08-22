import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})

export class MineComponent implements OnInit {
  title = "Mine Coins";
  coins: any;

  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this._httpService.shareCoins(data => {
      this.coins = data;
    });
  } 

  mineCoins() {
    console.log("mined");
    this.coins = this._httpService.addToCoins(this.title, 10);
  }

  
}
