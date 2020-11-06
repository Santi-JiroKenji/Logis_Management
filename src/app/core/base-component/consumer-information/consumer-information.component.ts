import { ConsumerModel } from './../../../../model/ConsumerModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consumer-information',
  templateUrl: './consumer-information.component.html',
  styleUrls: ['./consumer-information.component.scss']
})
export class ConsumerInformationComponent implements OnInit {
  @Input()
  data: ConsumerModel;

  constructor() { }

  ngOnInit() {
  }

}
