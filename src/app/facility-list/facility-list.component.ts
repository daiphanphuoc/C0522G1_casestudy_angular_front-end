import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';
import {FuramaService} from '../service/furama.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Array<Facility>;

  constructor(private facilityService: FacilityService,
              private furamaService: FuramaService) {
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAll();
    const ti = 'fsdafsa';
    // this.furamaService.setTitle(ti);
  }

}
