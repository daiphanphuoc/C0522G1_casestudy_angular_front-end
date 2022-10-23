import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Cập nhật dịch vụ'); }

  ngOnInit(): void {
  }

}
