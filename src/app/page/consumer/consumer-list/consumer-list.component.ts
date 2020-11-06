import { ConsumerService } from './../../../service/consumer.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerModel } from './../../../../model/ConsumerModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewConsumerDialogComponent } from 'src/app/core/base-component/dialog-select/view-consumer-dialog/view-consumer-dialog.component';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

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

  customerList: ConsumerModel[] = [];
  url = this.router.url;

  constructor(
    public dialog: MatDialog,
    private consumerService: ConsumerService,
    private router: Router
  ) {
    this.customerList = this.consumerService.findAll();
  }

  ngOnInit() {

  }

  onConsumerCardViewClick(id: number) {
    this.dialog.open(ViewConsumerDialogComponent, {
      width: '1011px',
      data: id
    })
  }

  onClickConsumerAdd() {
    this.router.navigateByUrl(`${this.url}/add`);
  }

  onClickconsumerEdit(id: number) {
    this.router.navigateByUrl(`${this.url}/edit/${id}`);
  }

}
