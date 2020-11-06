import { PackageModel } from './../../../../model/PackageModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packages-data',
  templateUrl: './packages-data.component.html',
  styleUrls: ['./packages-data.component.scss']
})
export class PackagesDataComponent implements OnInit {
  @Input()
  data: PackageModel;

  //   displayedColumns: string[] = ['packageName', 'system', 'carValue', 'userValue', 'mobileSupport', 'serverType', 'backup', 'support'];
  //   dataSource = new MatTableDataSource<PackageModel>(ELEMENT_DATA);

  ngOnInit() {
  }
}


// const ELEMENT_DATA: PackageModel[] = [
//   { packageName: 'Basic', system: 'TMS', carValue: 'ไม่เกิน 5 คัน', userValue: 'ไม่เกิน 10 คน', mobileSupport: 'Android', serverType: 'VPS', backup: '-', support: '-' },
//   { packageName: 'Business', system: 'TMS', carValue: 'ตามปริมาณการใช้งาน', userValue: 'ไม่จำกัด', mobileSupport: 'Android,IOS', serverType: 'cloud', backup: 'มี', support: 'โทร & รีโมท' },
//   { packageName: 'Enterprise', system: 'TMS + VRP', carValue: 'ตามปริมาณการใช้งาน', userValue: 'ไม่จำกัด', mobileSupport: 'Android,IOS', serverType: 'cloud', backup: 'มี', support: 'โทร & รีโมท' },
// ];
