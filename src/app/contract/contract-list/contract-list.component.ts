import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[];
  totalPage: number;
  page: number;
  record = 4;

  constructor(private titleService: Title,
              private contractService: ContractService) {
    this.titleService.setTitle('Danh sách hợp đồng');
    // this.contractList = this.contractService.getAll();
  }

  ngOnInit(): void {
    this.contractList = this.contractService.getAll().slice(0, this.record);
    this.page = 1;
    this.totalPage = Math.ceil(this.contractService.getAll().length / this.record);
  }

  previous() {
    if (this.page > 1) {
      this.page--;
      this.contractList = this.contractService.getAll().slice((this.page - 1) * this.record, this.page * this.record);

    }

  }

  next() {
    if (this.page < this.totalPage) {
      this.page++;
      this.contractList = this.contractService.getAll().slice((this.page - 1) * this.record, this.page * this.record);

    }
  }
}
