import { DialogSelectModule } from './../../core/base-component/dialog-select/dialog-select.module';
import { SummaryCardModule } from './../../core/base-component/summary-card/summary-card.module';
import { ConsumerCardDetailModule } from './../../core/base-component/consumer-card-detail/consumer-card-detail.module';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerRoutes } from './consumer.routing';

@NgModule({
    imports: [
        CommonModule,
        ConsumerRoutes,
        SummaryCardModule,
        ConsumerCardDetailModule,
        DialogSelectModule
    ],
    declarations: [
        ConsumerListComponent,
        ConsumerFormComponent
    ],
})
export class ConsumerModule { }


