import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { PaymentTermsPipe } from './pipes/payment-terms.pipe';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatepickerHeaderComponent } from './components/datepicker-header/datepicker-header.component';
import { DatepickerGridComponent } from './components/datepicker-grid/datepicker-grid.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomSelectComponent,
    PaymentTermsPipe,
    DatepickerComponent,
    DatepickerHeaderComponent,
    DatepickerGridComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
  exports: [CustomInputComponent, CustomSelectComponent, DatepickerComponent],
})
export class FormControlsModule {}
