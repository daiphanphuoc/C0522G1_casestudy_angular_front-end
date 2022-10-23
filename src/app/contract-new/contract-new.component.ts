import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contract-new',
  templateUrl: './contract-new.component.html',
  styleUrls: ['./contract-new.component.css']
})
export class ContractNewComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Thêm mới hợp đồng');
  }

  ngOnInit(): void {
  }

}
