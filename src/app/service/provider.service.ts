import { ProviderModel } from 'src/model/ProviderModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private dataList: ProviderModel[] = [
    {
      id: 1,
      logo_provider: './assets/images/ready_idc.jpg',
      providerName: 'Ready idc cloud',
      telNumber: '089-991-990',
      webUrl: 'www.ready.idc.com'
    },
    {
      id: 2,
      logo_provider: './assets/images/ready_idc.jpg',
      providerName: 'Ready idc cloud',
      telNumber: '089-991-991',
      webUrl: 'www.ready.idc.com'
    },
    {
      id: 3,
      logo_provider: './assets/images/ready_idc.jpg',
      providerName: 'Ready idc cloud',
      telNumber: '089-991-992',
      webUrl: 'www.ready.idc.com'
    },
  ]
  constructor() { }

  findAll(): ProviderModel[] {
    return this.dataList;
  }

  findById(id: number): ProviderModel {
    return this.dataList.find((value) => value.id === id);
  }
}
