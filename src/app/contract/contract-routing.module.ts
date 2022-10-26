import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractNewComponent} from './contract-new/contract-new.component';


const routes: Routes = [
  {path: '', component: ContractListComponent},
  {path: 'create', component: ContractNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
