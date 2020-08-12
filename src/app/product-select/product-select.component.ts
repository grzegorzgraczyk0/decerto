import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IProduct } from './products.model';

@Component({
  selector: 'product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ProductSelectComponent), multi: true }
  ]
})
export class ProductSelectComponent implements ControlValueAccessor {

  @Input() products: IProduct[];

  value : string;
  propagateChange : any = () => {};

  constructor() { }

  writeValue(value): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}
}
