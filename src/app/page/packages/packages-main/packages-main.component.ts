import { MatDialog } from '@angular/material/dialog';
import { PackageFormDialogComponent } from './../../../core/base-component/dialog-form/package-form-dialog/package-form-dialog.component';
import { PackageService } from './../../../service/package.service';
import { PackageModel } from './../../../../model/PackageModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PackagesDialogViewComponent } from 'src/app/core/base-component/dialog-view/packages-dialog-view/packages-dialog-view.component';

@Component({
  selector: 'app-packages-main',
  templateUrl: './packages-main.component.html',
  styleUrls: ['./packages-main.component.scss']
})
export class PackagesMainComponent implements OnInit {
  displayedColumns: string[] = ['packageName', 'system', 'carValue', 'userValue', 'mobileSupport', 'serverType', 'backup', 'support', 'action'];
  dataSource = new MatTableDataSource<PackageModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private packageService: PackageService, public packageFormDialog: MatDialog, public packageDialogView: MatDialog) {
    this.dataSource.data = this.packageService.findAll();
  }

  onClickPackageAdd() {
    this.packageFormDialog.open(PackageFormDialogComponent, {
      width: '460px',
    });
  }

  onClickPackageView(id: number) {
    this.packageDialogView.open(PackagesDialogViewComponent, {
      width: '370px',
      data: id
    });
  }

  onClickPackageEdit() {
    this.packageFormDialog.open(PackageFormDialogComponent, {
      width: '460px',
    });
  }
}
const ELEMENT_DATA: PackageModel[] = [];
