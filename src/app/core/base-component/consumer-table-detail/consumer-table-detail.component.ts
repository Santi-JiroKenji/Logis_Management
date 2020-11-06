import { ConsumerService } from 'src/app/service/consumer.service';
import { MatPaginator } from '@angular/material/paginator';
import { ConsumerModel } from 'src/model/ConsumerModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-consumer-table-detail',
  templateUrl: './consumer-table-detail.component.html',
  styleUrls: ['./consumer-table-detail.component.scss']
})
export class ConsumerTableDetailComponent implements OnInit {
  displayedColumns: string[] = ['consumerName', 'status', 'packageName', 'runtime', 'serverName', 'expDate', 'action'];
  dataSource = new MatTableDataSource<ConsumerModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input()
  data: ConsumerModel;

  @Input()
  viewMode: boolean = false;

  @Output()
  clickView: EventEmitter<ConsumerModel> = new EventEmitter();

  @Output()
  clickEdit: EventEmitter<ConsumerModel> = new EventEmitter();

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private consumerService: ConsumerService
  ) {
    this.dataSource.data = this.consumerService.findAll();
  }

  onClickView() {
    this.clickView.emit(this.data);
  }

  onClickEdit() {
    this.clickEdit.emit(this.data);
  }
}

const ELEMENT_DATA: ConsumerModel[] = [];
