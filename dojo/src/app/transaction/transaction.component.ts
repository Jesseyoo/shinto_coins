import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  title = "Transaction";
  coins : any;
  ledger : any;
  transaction : any;
  id : any;

  constructor(private _httpService : HttpService, private _active : ActivatedRoute) { }

  ngOnInit() {
    this.getLedger();

    let observable : Observable<any> = this._active.params;
      observable.subscribe(data => {
        this.id = data._id;
        this.transaction = this.ledger[this.id];
      })

  }
  getLedger() {
    this._httpService.shareLedger(data => {
      this.ledger = data;
    });
  }
  
}
