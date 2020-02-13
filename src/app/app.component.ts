import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-validation-form';
  public checkoutForm: any;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      phone: '',
      job: '',
      password: ''
    });

  }

  onSubmit(formData) {
    console.table(formData);
  }

}
