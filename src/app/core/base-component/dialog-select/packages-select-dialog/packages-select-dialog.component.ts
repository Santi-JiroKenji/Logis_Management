import { PackageService } from './../../../../service/package.service';
import { PackageModel } from './../../../../../model/PackageModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-packages-select-dialog',
  templateUrl: './packages-select-dialog.component.html',
  styleUrls: ['./packages-select-dialog.component.scss']
})
export class PackagesSelectDialogComponent implements OnInit {
  displayedColumns: string[] = ['packageName', 'system', 'carValue', 'userValue', 'serverType', 'backup', 'action'];
  dataSource = new MatTableDataSource<PackageModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private packageService: PackageService) {
    this.dataSource.data = this.packageService.findAll();
  }
}

const ELEMENT_DATA: PackageModel[] = [];