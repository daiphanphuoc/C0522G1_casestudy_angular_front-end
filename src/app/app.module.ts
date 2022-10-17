import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyIndexComponent } from './body-index/body-index.component';
import { RightComponent } from './right/right.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityUpdateComponent } from './facility-update/facility-update.component';
import { FacilityNewFormComponent } from './facility-new-form/facility-new-form.component';
import { FacilityNewModalComponent } from './facility-new-modal/facility-new-modal.component';
import { MessageSuccessModalComponent } from './message-success-modal/message-success-modal.component';
import { MessageFailModalComponent } from './message-fail-modal/message-fail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyIndexComponent,
    RightComponent,
    FacilityListComponent,
    FacilityUpdateComponent,
    FacilityNewFormComponent,
    FacilityNewModalComponent,
    MessageSuccessModalComponent,
    MessageFailModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
