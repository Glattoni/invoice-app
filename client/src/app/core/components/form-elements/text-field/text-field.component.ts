import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit {
  @Input() id: string = 'text field';
  @Input() value: string = 'text field';
  constructor() {}

  ngOnInit(): void {}
}
