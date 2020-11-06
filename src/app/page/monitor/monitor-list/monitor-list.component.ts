import { ConsumerService } from 'src/app/service/consumer.service';
import { ConsumerModel } from 'src/model/ConsumerModel';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ViewConsumerDialogComponent } from 'src/app/core/base-component/dialog-select/view-consumer-dialog/view-consumer-dialog.component';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})
export class MonitorListComponent implements OnInit {

  list = [
    {
      topic: 'เปิดการใช้งาน',
      detail: '1',
      color: 'success'
    },
    {
      topic: 'ปิดการใช้งาน',
      detail: '1',
      color: 'danger'
    }
  ];
  public displayMode: number = 2;

  customerList: ConsumerModel[] = [];

  constructor(
    public dialog: MatDialog,
    private consumerService: ConsumerService
  ) {
    this.customerList = this.consumerService.findAll();
  }

  ngOnInit() {

  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  onConsumerCardViewClick(id: number) {
    this.dialog.open(ViewConsumerDialogComponent, {
      width: '1011px',
      data: id
    })
  }

}
