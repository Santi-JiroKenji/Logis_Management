import { Injectable } from '@angular/core';
import { ServerModel } from 'src/model/ServerModel';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private dataList: ServerModel[] = [
    {
      id: 1,
      serverName: 'HDW Size XS',
      cpuPer: '60%',
      memory: '0.8/1 GB',
      disk: '16 GB / 20 GB Disk',
      provider: 'Ready cloud',
      status: 'เปิดการใช้งาน',
      endPoint: '192.991.665.8',
      cpu: '1 core',
      ram: '1 GB',
      ssd: '20 GB'
    },
    {
      id: 2,
      serverName: 'HDW Size R1',
      cpuPer: '35%',
      memory: '1.8/2 GB',
      disk: '28 GB / 40 GB Disk',
      provider: 'Ready cloud',
      status: 'ปิดการใช้งาน',
      endPoint: '192.603.898.3',
      cpu: '2 core',
      ram: '2 GB',
      ssd: '40 GB'
    },
    {
      id: 3,
      serverName: 'HDW Size R2',
      cpuPer: '40%',
      memory: '3.7/4 GB',
      disk: '78 GB / 80 GB Disk',
      provider: 'Ready cloud',
      status: 'เปิดการใช้งาน',
      endPoint: '192.152.152.3',
      cpu: '2 core',
      ram: '2 GB',
      ssd: '40 GB'
    },
    {
      id: 4,
      serverName: 'HDW Size R3',
      cpuPer: '78%',
      memory: '7.6/8 GB',
      disk: '145 GB / 160 GB Disk',
      provider: 'Ready cloud',
      status: 'เปิดการใช้งาน',
      endPoint: '192.456.250.3',
      cpu: '2 core',
      ram: '2 GB',
      ssd: '40 GB'
    },
  ]

  constructor() { }

  findAll(): ServerModel[] {
    return this.dataList;
  }

  findById(id: number): ServerModel {
    return this.dataList.find((value) => value.id === id);
  }
}
