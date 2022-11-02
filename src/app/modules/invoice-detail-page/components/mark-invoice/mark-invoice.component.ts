import {
  Input,
  Output,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-mark-invoice',
  templateUrl: './mark-invoice.component.html',
  styleUrls: ['./mark-invoice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkInvoiceComponent {
  @Input() public slug = '';
  @Output() public cancel = new EventEmitter<void>();
  @Output() public markAsPaid = new EventEmitter<void>();
}
