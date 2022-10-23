import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BodyIndexComponent} from './body-index/body-index.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerNewComponent} from './customer-new/customer-new.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FacilityNewFormComponent} from './facility-new-form/facility-new-form.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractNewComponent} from './contract-new/contract-new.component';

const routes: Routes = [
  {path: '', component: BodyIndexComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerNewComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: 'facility/update/:id', component: FacilityUpdateComponent},
  {path: 'facility/create', component: FacilityNewFormComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'contract/create', component: ContractNewComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FuramaRoutingModule { }
