import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BodyIndexComponent} from './body-index/body-index.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerNewComponent} from './customer/customer-new/customer-new.component';
import {CustomerUpdateComponent} from './customer/customer-update/customer-update.component';
import {FacilityUpdateComponent} from './facility/facility-update/facility-update.component';
import {FacilityNewFormComponent} from './facility/facility-new-form/facility-new-form.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {ContractNewComponent} from './contract/contract-new/contract-new.component';
import {CustomerModule} from './customer/customer.module';

const routes: Routes = [
    {path: '', component: BodyIndexComponent},
    {path: 'customer', loadChildren: () => import ('./customer/customer.module').then(module => module.CustomerModule)},
    {path: 'contract', loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)},
    {path: 'facility', loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)}
  ]
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FuramaRoutingModule {
}
