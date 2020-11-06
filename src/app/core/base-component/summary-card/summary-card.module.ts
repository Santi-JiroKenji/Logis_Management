import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCardComponent } from './summary-card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SummaryCardComponent],
    exports: [SummaryCardComponent]
})
export class SummaryCardModule { }