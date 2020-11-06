import { ConsumerService } from './../../../service/consumer.service';
import { ConsumerModel } from 'src/model/ConsumerModel';
import { PackageModel } from 'src/model/PackageModel';
import { ServerModel } from 'src/model/ServerModel';
import { ServersSelectDialogComponent } from './../../../core/base-component/dialog-select/servers-select-dialog/servers-select-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { PackagesSelectDialogComponent } from 'src/app/core/base-component/dialog-select/packages-select-dialog/packages-select-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.scss']
})
export class ConsumerFormComponent implements OnInit {

  id: number;

  @Input()
  data: ConsumerModel;

  constructor(
    route: ActivatedRoute,
    public dialogServersSelect: MatDialog,
    public dialogPackagesSelect: MatDialog,
    private consumerService: ConsumerService
  ) {
    const { id: id } = route.snapshot.params;
    this.id = Number(id);
    this.data = this.consumerService.findById(this.id);
  }

  ngOnInit() {
  }

  onClickViewSelectServers() {
    this.dialogServersSelect.open(ServersSelectDialogComponent, {
      width: '1011px',
    });
  }

  onClickViewSelectPackages() {
    this.dialogPackagesSelect.open(PackagesSelectDialogComponent, {
      width: '1011px',
    });
  }
}


