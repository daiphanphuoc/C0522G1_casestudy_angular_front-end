import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FacilityNewFormComponent} from './facility-new-form/facility-new-form.component';
import {FacilityNewModalComponent} from './facility-new-modal/facility-new-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityUpdateComponent,
    FacilityNewFormComponent,
    FacilityNewModalComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
