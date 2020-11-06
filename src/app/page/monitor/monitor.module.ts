import { ConsumerTableDetailModule } from './../../core/base-component/consumer-table-detail/consumer-table-detail.module';
import { DialogSelectModule } from './../../core/base-component/dialog-select/dialog-select.module';
import { SummaryCardModule } from './../../core/base-component/summary-card/summary-card.module';
import { ConsumerCardDetailModule } from './../../core/base-component/consumer-card-detail/consumer-card-detail.module';
import { MonitorListComponent } from './monitor-list/monitor-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorRoutes } from './monitor.routing';

@NgModule({
    imports: [
        CommonModule,
        MonitorRoutes,
        SummaryCardModule,
        ConsumerCardDetailModule,
        ConsumerTableDetailModule,
        DialogSelectModule
    ],
    declarations: [
        MonitorListComponent,
    ]
})
export class MonitorModule { }


