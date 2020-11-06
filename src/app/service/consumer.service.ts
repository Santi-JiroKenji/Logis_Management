import { Injectable } from '@angular/core';
import { ConsumerModel } from 'src/model/ConsumerModel';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private dataList: ConsumerModel[] = [
    {
      id: 1,
      logo: './assets/images/shipping_logo.gif',
      consumerName: 'บริษัท Shipping ขนส่งจำกัด',
      contract: '02-123-123',
      color: 'success',
      status: 'เปิดการใช้งาน',
      runtime: '3',
      carValue: '100',
      userValue: '10',
      expDate: '06/05/2022',
      timeExp: '365',
      email: 'shipping@gmail.com',
      address: '286/89 หมู่ 10 ต.โพธิ์กลาง อ.เมือง จ.นครราชสีมา',
      detail: '',
      server: {
        serverName: 'HDW size XS',
        color: 'success',
        status: 'เปิดการใช้งาน',
        endPoint: '192.991.665.8',
        provider: 'Ready cloud',
        cpu: '1 core',
        ram: '1 GB',
        ssd: '20GB'
      },
      package: {
        packageName: 'Enterprise',
        system: 'TMS + VRP',
        carValue: 'ตามปริมาณการใช้งาน',
        userValue: 'ไม่จำกัด',
        mobileSupport: 'Android,IOS',
        serverType: 'Cloud',
        backup: 'มี',
        support: 'โทร & รีโมท',
      }
    },
    {
      id: 2,
      logo: './assets/images/transport_logistics.jpg',
      consumerName: 'บริษัท Transport Logistics',
      contract: '02-111-111',
      color: 'danger',
      status: 'ปิดการใช้งาน',
      runtime: '5',
      carValue: '120',
      userValue: '10',
      expDate: '10/11/2022',
      timeExp: '15',
      email: 'transport.logistics@gmail.com',
      address: '222/89 หมู่ 10 ต.โพธิ์กลาง อ.เมือง จ.นครราชสีมา',
      detail: '',
      server: {
        serverName: 'HDW size R1',
        color: 'danger',
        status: 'ปิดการใช้งาน',
        endPoint: '192.603.898.3',
        provider: 'Ready cloud',
        cpu: '2 core',
        ram: '2 GB',
        ssd: '40GB'
      },
      package: {
        packageName: 'Business',
        system: 'TMS',
        carValue: 'ตามปริมาณการใช้งาน',
        userValue: 'ไม่จำกัด',
        mobileSupport: 'Android,IOS',
        serverType: 'Cloud',
        backup: 'มี',
        support: 'โทร & รีโมท',
      }
    },
  ];

  constructor() { }

  findAll(): ConsumerModel[] {
    // fetch api .....
    // console.log('find all');
    return this.dataList;
  }

  findById(id: number): ConsumerModel {
    // console.log('find by id');
    return this.dataList.find((value) => value.id === id);

  }



}
