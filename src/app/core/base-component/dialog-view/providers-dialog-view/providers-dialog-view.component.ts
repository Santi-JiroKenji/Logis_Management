import { ProviderService } from './../../../../service/provider.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProviderModel } from './../../../../../model/ProviderModel';
import { Component, OnInit, Optional, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-providers-dialog-view',
  templateUrl: './providers-dialog-view.component.html',
  styleUrls: ['./providers-dialog-view.component.scss']
})
export class ProvidersDialogViewComponent implements OnInit {

  provider: ProviderModel = {};

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    data: number,
    private providerService: ProviderService

  ) {
    this.provider = this.providerService.findById(data);
  }
  ngOnInit() {
  }

}
