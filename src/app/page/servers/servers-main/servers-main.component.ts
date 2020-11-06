import { ServerService } from './../../../service/server.service';
import { ServersFormDialogComponent } from './../../../core/base-component/dialog-form/servers-form-dialog/servers-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ServerModel } from './../../../../model/ServerModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers-main',
  templateUrl: './servers-main.component.html',
  styleUrls: ['./servers-main.component.scss']
})
export class ServersMainComponent implements OnInit {
  displayedColumns: string[] = ['serverName', 'memory', 'disk', 'provider', 'status', 'action'];
  dataSource = new MatTableDataSource<ServerModel>(ELEMENT_DATA);

  url = this.router.url;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    public serverFormDialog: MatDialog,
    private serverService: ServerService,
    private router: Router
  ) {
    this.dataSource.data = this.serverService.findAll();
  }

  onClickServerAdd() {
    this.serverFormDialog.open(ServersFormDialogComponent, {
      width: '460px',
    });
  }

  onClickServerViewInfo(id: number) {
    this.router.navigateByUrl(`${this.url}/view/${id}`);
  }

  onClickServerEdit() {
    this.serverFormDialog.open(ServersFormDialogComponent, {
      width: '460px',
    });
  }

}

const ELEMENT_DATA: ServerModel[] = [];