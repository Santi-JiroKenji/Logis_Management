import { Injectable } from '@angular/core';
import { PackageModel } from 'src/model/PackageModel';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private dataList: PackageModel[] = [
    {
      id: 1,
      packageName: 'Basic',
      system: 'TMS',
      carValue: 'ไม่เกิน 5 คัน',
      userValue: 'ไม่เกิน 10 คน',
      mobileSupport: 'Android',
      serverType: 'VPS',
      backup: '-',
      support: '-',
      functionForConsumer: 'เต็มรูปแบบ',
      shipmentValue: 'ไม่จำกัด',
      cargoList: 'ไม่จำกัด',
      promotion: 'ฟรี',
      viewMode: true
    },
    {
      id: 2,
      packageName: 'Business',
      system: 'TMS',
      carValue: 'ตามปริมาณการใช้งาน',
      userValue: 'ไม่จำกัด',
      mobileSupport: 'Android,IOS',
      serverType: 'cloud',
      backup: 'มี',
      support: 'โทร & รีโมท',
      functionForConsumer: 'เต็มรูปแบบ',
      shipmentValue: 'ไม่จำกัด',
      cargoList: 'ไม่จำกัด',
      promotion: '12',
      viewMode: false
    },
    {
      id: 3,
      packageName: 'Enterprise',
      system: 'TMS + VRP',
      carValue: 'ตามปริมาณการใช้งาน',
      userValue: 'ไม่จำกัด',
      mobileSupport: 'Android,IOS',
      serverType: 'cloud',
      backup: 'มี',
      support: 'โทร & รีโมท',
      functionForConsumer: 'เต็มรูปแบบ',
      shipmentValue: 'ไม่จำกัด',
      cargoList: 'ไม่จำกัด',
      promotion: 'ติดต่อ',
      viewMode: true
    },
  ]

  constructor() { }
  findAll(): PackageModel[] {
    return this.dataList;
  }

  findById(id: number): PackageModel {
    return this.dataList.find((value) => value.id === id);

  }

}
