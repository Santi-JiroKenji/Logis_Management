import { ServerModel } from './../../../../model/ServerModel';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-servers-data',
  templateUrl: './servers-data.component.html',
  styleUrls: ['./servers-data.component.scss']
})
export class ServersDataComponent implements OnInit {
  @Input()
  data: ServerModel;

  // @Input()
  // serversDataList: ServerModel[];

  // displayedColumns: string[] = ['serverName', 'status', 'endPoint', 'provider', 'cpu', 'ram', 'ssd'];
  // dataSource = new MatTableDataSource<ServerModel>();

  ngOnInit() {
    // this.dataSource.data = this.serversDataList;
  }
}

