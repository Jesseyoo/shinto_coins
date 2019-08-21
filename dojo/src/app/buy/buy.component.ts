import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
  title = "Buy Coins";
  coins : any;
  currentValue : String = "$1.25";
  // bought : number;

  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this._httpService.shareCoins(data => {
      this.coins = data;
    });
  } 

  // buyCoins() {
  //   let num = this.bought['coins'];
  //   console.log(`purchased ${num} ShintoCoins`);
  //   this.coins = this._httpService.addToCoins(num);
  // }

}
