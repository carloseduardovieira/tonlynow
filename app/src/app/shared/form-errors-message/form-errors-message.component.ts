import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-errors-message',
  templateUrl: './form-errors-message.component.html',
})
export class FormErrorsMessageComponent implements OnChanges {
  @Input() customMessages: ValidationErrors;
  @Input() formError: any;

  public message: string;

  constructor() { }

  ngOnChanges() {
    const key = Object.keys(this.formError);
    if (key && key[0]) {
      this.message = this.customMessages[key[0]];
    }
  }

}
