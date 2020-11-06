import { ConsumerModel } from 'src/model/ConsumerModel';
import { ServerModel } from './../../../../../model/ServerModel';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsumerService } from 'src/app/service/consumer.service';

@Component({
  selector: 'app-view-consumer-dialog',
  templateUrl: './view-consumer-dialog.component.html',
  styleUrls: ['./view-consumer-dialog.component.scss']
})
export class ViewConsumerDialogComponent implements OnInit {

  consumer: ConsumerModel = {};

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    data: number,
    private consumerService: ConsumerService

  ) {
    this.consumer = this.consumerService.findById(data);
  }

  ngOnInit() {
  }

}
