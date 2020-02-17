import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public checkoutForm: any;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      job: [''],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit(customerData) {
    this.submitted = true;

    if (this.checkoutForm.invalid) {
      return;
    } else {
      alert('SUCCESS!! :-)');
      console.table(customerData);
    }
  }
}
