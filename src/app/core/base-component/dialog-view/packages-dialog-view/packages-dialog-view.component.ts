import { PackageService } from './../../../../service/package.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PackageModel } from 'src/model/PackageModel';
import { Component, OnInit, Optional, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-packages-dialog-view',
  templateUrl: './packages-dialog-view.component.html',
  styleUrls: ['./packages-dialog-view.component.scss']
})
export class PackagesDialogViewComponent implements OnInit {
  package: PackageModel = {};

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    data: number,
    private packageService: PackageService

  ) {
    this.package = this.packageService.findById(data);
  }

  ngOnInit() {
  }

}
