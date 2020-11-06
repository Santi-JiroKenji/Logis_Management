import { ProvidersDialogViewComponent } from './../../../core/base-component/dialog-view/providers-dialog-view/providers-dialog-view.component';
import { ProviderService } from './../../../service/provider.service';
import { ProviderModel } from './../../../../model/ProviderModel';
import { ProviderFormDialogComponent } from './../../../core/base-component/dialog-form/provider-form-dialog/provider-form-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-providers-main',
  templateUrl: './providers-main.component.html',
  styleUrls: ['./providers-main.component.scss']
})
export class ProvidersMainComponent implements OnInit {
  displayedColumns: string[] = ['providerName', 'telNumber', 'webUrl', 'action'];
  dataSource = new MatTableDataSource<ProviderModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public providerFormDialog: MatDialog, public providerViewDialog: MatDialog, private providerService: ProviderService) {
    this.dataSource.data = this.providerService.findAll();
  }

  onClickProviderAdd() {
    this.providerFormDialog.open(ProviderFormDialogComponent, {
      width: '460px',
    });
  }

  onClickProviderView(id: number) {
    this.providerViewDialog.open(ProvidersDialogViewComponent, {
      width: '460px',
      data: id
    });
  }

  onClickProviderEdit() {
    this.providerFormDialog.open(ProviderFormDialogComponent, {
      width: '460px',
    });
  }

}

const ELEMENT_DATA: ProviderModel[] = [];