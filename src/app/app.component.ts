import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IProduct } from './product-select/products.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decerto';
  isCollapsed = true;

  form: FormGroup;
  
  products: IProduct[] = [{
    id: 1,
    name: "product 1",
    checked: true,
  },
  {
    id: 2,
    name: "product 2",
    checked: false,
  },
  {
    id: 3,
    name: "product 3",
    checked: false,
  },
  {
    id: 4,
    name: "product 4",
    checked: false,
  },
  {
    id: 5,
    name: "product 5",
    checked: false,
  },
  {
    id: 6,
    name: "product 6",
    checked: false,
  },
];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      product: ''
    });
  }

  toggleProducts(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
