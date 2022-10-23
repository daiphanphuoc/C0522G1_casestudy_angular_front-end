import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Contract} from '../model/contract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[];

  constructor(private titleService: Title,
              private contractService: ContractService) {
    this.titleService.setTitle('Danh sách hợp đồng');
    this.contractList = this.contractService.getAll();
  }

  ngOnInit(): void {
  }

}
