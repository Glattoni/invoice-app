import { InvoiceStatus } from '@shared/constants/invoice.constants';

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  _id: string;
  slug: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatus;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export interface Invoices {
  invoices: Invoice[];
  length: number;
}

export type NewInvoice = Omit<Invoice, '_id'>;
