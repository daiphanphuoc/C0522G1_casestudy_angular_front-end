import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
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

  constructor(private customerService: CustomerService,
              private titleService: Title) {
    this.titleService.setTitle('Danh sách khách hàng');
  }

  ngOnInit(): void {
    this.customerList = this.customerService.customerList;
  }

}
