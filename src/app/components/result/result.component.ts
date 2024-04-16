import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() percent!: number | string;
  @Input() amount!: number | string;

  constructor() { }

  ngOnInit(): void {
  }

  get result(): number | undefined {
    if (!isNaN(Number(this.percent)) && !isNaN(Number(this.amount))) {
      const percentNum = parseFloat(String(this.percent));
      const amountNum = parseFloat(String(this.amount));
      const resultPercent = (percentNum / 100) * amountNum;
      console.log(resultPercent);
      return resultPercent;
    }
    return undefined;
  }

}
