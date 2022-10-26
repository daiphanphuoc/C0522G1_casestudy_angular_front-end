import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FacilityNewFormComponent} from './facility-new-form/facility-new-form.component';
import {FacilityListComponent} from './facility-list/facility-list.component';


const routes: Routes = [
  {path: 'update/:id', component: FacilityUpdateComponent},
  {path: 'create', component: FacilityNewFormComponent},
  {path: '', component: FacilityListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
