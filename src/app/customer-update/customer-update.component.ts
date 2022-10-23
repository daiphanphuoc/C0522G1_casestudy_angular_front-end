import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;

  customerTypeList: string[] = ['Diamond', 'Platinium', 'Gold', 'Silver', 'Member'];
  formGroup: FormGroup;

  constructor(private titleService: Title,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.titleService.setTitle('Cập nhật khách hàng');
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customer = this.customerService.findById(id);
    this.formGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      // tslint:disable-next-line:max-line-length
      /*name:    new FormControl('', [Validators.required, Validators.pattern('^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$')]),*/
      birthday: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl(false, [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[1-9][\\d]{11}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^0[\\d]{9}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
    this.formGroup.setValue(this.customer);
  }


  ngOnInit(): void {
  }

  private checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  giveFormValue() {
    console.log(this.formGroup.value);
  }
}
