import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  title = "Browse Ledger";
  coins : any;
  ledger : any;

  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.getCoins();
    this.getLedger();
  }

  getCoins() {
    this._httpService.shareCoins(data => {
      this.coins = data;
    });
  } 

  getLedger() {
    this._httpService.shareLedger(data => {
      this.ledger = data;
    });
  }

}
