import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {

  @Input()
  topic: string

  @Input()
  detail: string;

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
  }

}
