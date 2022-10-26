import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-new-form',
  templateUrl: './facility-new-form.component.html',
  styleUrls: ['./facility-new-form.component.css'],
  // providers: [FacilityService, Title, Router]
})
export class FacilityNewFormComponent implements OnInit {
  facilityTypeList: string[] = ['Villa', 'House', 'Room'];
  rentTypeList: string[] = ['Giờ', 'Ngày', 'Tháng', 'Năm'];

  facilityFormGroup: FormGroup = new FormGroup({
    facilityId: new FormControl(''),
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \\d]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    description: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });


  constructor(private titleService: Title,
              private facilityService: FacilityService,
              private router: Router) {
    this.titleService.setTitle('Thêm mới dịch vụ');
  }

  ngOnInit(): void {
  }


  submit(): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.saveFacility(facility);
    alert('Thêm mới dịch vụ  [' + facility.facilityName + ']  thành công!');
    this.facilityFormGroup.reset();
    this.router.navigateByUrl('facility');

  }
}
