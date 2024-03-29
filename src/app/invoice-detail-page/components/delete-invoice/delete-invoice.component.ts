import { CommonModule } from '@angular/common';
import {
  Input,
  Output,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-delete-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteInvoiceComponent {
  @Input() public slug = '';
  @Output() public cancel = new EventEmitter<void>();
  @Output() public delete = new EventEmitter<void>();
}
