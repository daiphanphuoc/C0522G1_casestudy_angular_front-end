import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AbstractControl, FormGroup, FormControl, Validators} from '@angular/forms';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-new',
  templateUrl: './contract-new.component.html',
  styleUrls: ['./contract-new.component.css']
})
export class ContractNewComponent implements OnInit {

  contractFormGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    dateFormGroup: new FormGroup({
      startDate: new FormControl('', this.checkStartDate),
      endDate: new FormControl('')
    }, this.checkEndDate),
    deposit: new FormControl('', [Validators.required, Validators.pattern('^0$|^[1-9]\\d*$')]),
    customer: new FormControl('', Validators.required),
    facility: new FormControl('', Validators.required)
  });

  customerList = this.customerService.findAll();
  facilityList = this.facilityService.findAll(); /*.filter(item => {
    return (item.facilityType === 'Villa' || item.facilityType === 'House');
  });*/
  curDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

  constructor(private titleService: Title,
              private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private router: Router) {
    this.titleService.setTitle('Thêm mới hợp đồng');
  }

  ngOnInit(): void {
  }

  submit(): void {
    const contract: Contract = {
      id: this.contractFormGroup.value.id,
      startDate: this.contractFormGroup.value.dateFormGroup.startDate,
      endDate: this.contractFormGroup.value.dateFormGroup.endDate,
      deposit: this.contractFormGroup.value.deposit,
      customer: this.contractFormGroup.value.customer,
      facility: this.contractFormGroup.value.facility
    };
    this.contractService.saveContract(contract);
    alert('Thêm mới hợp đồng thành công!');
    this.contractFormGroup.reset();
    this.router.navigateByUrl('/contract');
  }

  checkStartDate(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const formMonth = new Date(abstractControl.value).getMonth() + 1;
    const formDay = new Date(abstractControl.value).getDate();

    if (formYear > new Date().getFullYear()) {
      return null;
    }

    if (formYear < new Date().getFullYear()) {
      return {invalidStartDate: true};
    }

    if (formMonth > new Date().getMonth() + 1) {
      return null;
    }

    if (formMonth < new Date().getMonth() + 1) {
      return {invalidStartDate: true};
    }

    return (formDay >= new Date().getDate()) ? true : {invalidStartDate: true};
  }

  checkEndDate(abstractControl: AbstractControl): any {
    const formStartYear = new Date(abstractControl.value.startDate).getFullYear();
    const formStartMonth = new Date(abstractControl.value.startDate).getMonth() + 1;
    const formStartDay = new Date(abstractControl.value.startDate).getDate();

    const formEndYear = new Date(abstractControl.value.endDate).getFullYear();
    const formEndMonth = new Date(abstractControl.value.endDate).getMonth() + 1;
    const formEndDay = new Date(abstractControl.value.endDate).getDate();

    if (formEndYear > formStartYear) {
      return null;
    }

    if (formEndYear < formStartYear) {
      return {invalidEndDate: true};
    }

    if (formEndMonth > formStartMonth) {
      return null;
    }

    if (formEndMonth < formStartMonth) {
      return {invalidEndDate: true};
    }

    return (formEndDay >= formStartDay) ? null : {invalidEndDate: true};
  }
}
