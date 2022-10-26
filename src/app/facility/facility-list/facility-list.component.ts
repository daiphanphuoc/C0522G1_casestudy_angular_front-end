import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {FuramaService} from '../../service/furama.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Array<Facility>;
  page: number;
  totalPage: number;
  record = 4;

  constructor(private facilityService: FacilityService,
              private titleService: Title) {
    this.titleService.setTitle('Danh sách dịch vụ');
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAll().slice(0, this.record);
    this.page = 1;
    this.totalPage = Math.ceil(this.facilityService.getAll().length / this.record);
  }


  previous() {
    if (this.page > 1) {
      this.page--;
      this.facilities = this.facilityService.getAll().slice((this.page - 1) * this.record, this.page * this.record);

    }

  }

  next() {
    if (this.page < this.facilityService.getAll().length) {
      this.page++;
      this.facilities = this.facilityService.getAll().slice((this.page - 1) * this.record, this.page * this.record);

    }
  }

}
