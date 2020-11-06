import { ServerService } from './../../../../service/server.service';
import { ServerModel } from './../../../../../model/ServerModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-servers-select-dialog',
  templateUrl: './servers-select-dialog.component.html',
  styleUrls: ['./servers-select-dialog.component.scss']
})
export class ServersSelectDialogComponent implements OnInit {
  displayedColumns: string[] = ['serverName', 'status', 'provider', 'cpu', 'ram', 'ssd', 'action'];
  dataSource = new MatTableDataSource<ServerModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private serverServivce: ServerService) {
    this.dataSource.data = this.serverServivce.findAll();
  }
}

const ELEMENT_DATA: ServerModel[] = [];