import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-facility-new-form',
  templateUrl: './facility-new-form.component.html',
  styleUrls: ['./facility-new-form.component.css']
})
export class FacilityNewFormComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Thêm mới dịch vụ');
  }

  ngOnInit(): void {
  }

  changeForm(facilityNewFormComponent: FacilityNewFormComponent) {

  }
}
