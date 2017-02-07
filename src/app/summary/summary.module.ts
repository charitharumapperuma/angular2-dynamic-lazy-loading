import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SummaryComponent }
    ])
  ],
  exports: [
    SummaryComponent
  ],
  declarations: [
    SummaryComponent
  ]
})
export class SummaryModule { }
