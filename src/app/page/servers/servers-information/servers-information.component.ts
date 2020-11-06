import { ServerService } from './../../../service/server.service';
import { ServerModel } from './../../../../model/ServerModel';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-servers-information',
  templateUrl: './servers-information.component.html',
  styleUrls: ['./servers-information.component.scss']
})
export class ServersInformationComponent implements OnInit {

  id: number;

  @Input()
  data: ServerModel;

  constructor(
    route: ActivatedRoute,
    private serverService: ServerService
  ) {
    const { id: id } = route.snapshot.params;
    this.id = Number(id);
    this.data = this.serverService.findById(this.id);
  }

  ngOnInit() {
  }

}
