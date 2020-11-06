import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsumerModel } from 'src/model/ConsumerModel';

@Component({
  selector: 'app-consumer-card-detail',
  templateUrl: './consumer-card-detail.component.html',
  styleUrls: ['./consumer-card-detail.component.scss']
})
export class ConsumerCardDetailComponent {
  @Input()
  data: ConsumerModel;

  @Input()
  viewMode: boolean = false;

  @Output()
  clickView: EventEmitter<ConsumerModel> = new EventEmitter();

  @Output()
  clickEdit: EventEmitter<ConsumerModel> = new EventEmitter();

  constructor() { }

  onClickView() {
    this.clickView.emit(this.data);
  }

  onClickEdit() {
    this.clickEdit.emit(this.data);
  }

}