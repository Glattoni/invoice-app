import {
  OnInit,
  OnDestroy,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  Subject,
  Observable,
  merge,
  filter,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

import { addDays } from 'src/utils';
import { FormArray, FormGroup } from '@angular/forms';

import { Invoice, Item } from '@shared/models/invoice.model';
import { BillingForm, ListItem } from '../../models/billing-form.model';
import { InvoiceService } from '@core/services/invoice/invoice.service';
import { BillingFormService } from '@core/services/billing-form/billing-form.service';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillingFormComponent implements OnInit, OnDestroy {
  form?: FormGroup<BillingForm>;
  payload$?: Observable<Invoice>;
  visible$?: Observable<boolean>;

  valid: boolean = true;
  scrolledToBottom: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(
    private invoiceService: InvoiceService,
    private formService: BillingFormService
  ) {}

  ngOnInit(): void {
    this.getVisibility();
    this.getPayload();
    this.generateForm();
    this.patchFormValue();
    this.onFormValueChanges();
    this.onItemListValueChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDiscard(): void {
    this.valid = true;
    this.resetForm();
    this.formService.close();
  }

  onCancel(): void {
    this.valid = true;
    this.resetForm();
    this.createdAt?.enable();
    this.formService.finishEditing();
  }

  onOverlayClick(): void {
    this.payload$ ? this.onCancel() : this.onDiscard();
  }

  onSaveAsDraft(): void {
    this.status?.setValue('draft');
    this.onSubmit();
  }

  onSubmit(): void {
    this.validateForm();

    if (this.valid && this.formData) {
      this.invoiceService.createInvoice(this.formData);
      this.resetForm();
      this.formService.close();
    }
  }

  onSaveChanges(invoiceId: string): void {
    this.validateForm();

    if (this.valid && this.formData) {
      this.invoiceService.updateInvoice(invoiceId, this.formData);
      this.resetForm();
      this.formService.close();
    }
  }

  onScroll(value: boolean): void {
    this.scrolledToBottom = value;
  }

  private getVisibility(): void {
    this.visible$ = this.formService.visible$;
  }

  private getPayload(): void {
    this.payload$ = this.formService.payload$;
  }

  private generateForm() {
    this.form = this.formService.generateFormGroup();
  }

  private patchFormValue(): void {
    this.payload$
      ?.pipe(
        filter((payload) => payload !== null),
        takeUntil(this.destroy$)
      )
      .subscribe((invoice) => {
        this.form?.patchValue({
          slug: invoice.slug,
          status: invoice.status,
          senderAddress: invoice.senderAddress,
          clientAddress: invoice.clientAddress,
          clientName: invoice.clientName,
          clientEmail: invoice.clientEmail,
          createdAt: invoice.createdAt,
          paymentTerms: invoice.paymentTerms,
          paymentDue: invoice.paymentDue,
          description: invoice.description,
          total: invoice.total,
        });
        this.patchItemList(invoice.items);
        this.createdAt?.disable();
      });
  }

  private patchItemList(items: Item[]): void {
    this.items.clear();

    items.forEach((item) => {
      const listItem = this.formService.generateListItem(item);
      this.items.push(listItem);
    });
  }

  private onFormValueChanges(): void {
    if (this.createdAt && this.paymentTerms) {
      merge(this.createdAt.valueChanges, this.paymentTerms.valueChanges)
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          this.calculatePaymentDueDate();
        });
    }
  }

  private onItemListValueChanges(): void {
    this.items.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
        this.calculateAmountDue();
      });
  }

  private calculateAmountDue(): void {
    const amount = this.items.controls
      .map((control) => control.get('total')?.value)
      .filter((total): total is number => !!total)
      .reduce((total, current) => total + current, 0);

    this.total?.setValue(amount);
  }

  private calculatePaymentDueDate(): void {
    const date = this.createdAt?.value;
    const amount = this.paymentTerms?.value;

    if (date && amount) {
      const due = addDays(date, amount);
      this.paymentDue?.setValue(due);
    }
  }

  private validateForm(): void {
    this.form?.markAllAsTouched();
    this.valid = this.form?.invalid ? false : true;
  }

  private resetForm(): void {
    this.form?.reset();
    this.items.clear();
  }

  get formData() {
    return this.form?.getRawValue();
  }

  get total() {
    return this.form?.get('total');
  }

  get status() {
    return this.form?.get('status');
  }

  get createdAt() {
    return this.form?.get('createdAt');
  }

  get paymentDue() {
    return this.form?.get('paymentDue');
  }

  get paymentTerms() {
    return this.form?.get('paymentTerms');
  }

  get items() {
    return this.form?.get('items') as FormArray<FormGroup<ListItem>>;
  }
}
