import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  searchType: string;
  searchAddress: string;
  searchName: string;
  customerList: Array<Customer>;
  page: number;
  totalPage: number;
  record = 4;

  constructor(private customerService: CustomerService,
              private titleService: Title) {
    this.titleService.setTitle('Danh sách khách hàng');
  }

  ngOnInit(): void {
    this.customerList = this.customerService.customerList.slice(0, this.record);
    this.page = 1;
    this.totalPage = Math.ceil(this.customerService.customerList.length / this.record);
  }

  previous() {
    if (this.page > 1) {
      this.page--;
      this.customerList = this.customerService.customerList.slice((this.page - 1) * this.record, this.page * this.record);

    }

  }

  next() {
    if (this.page < this.totalPage) {
      this.page++;
      this.customerList = this.customerService.customerList.slice((this.page - 1) * this.record, this.page * this.record);

    }
  }
}
