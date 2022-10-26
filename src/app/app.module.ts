import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BodyIndexComponent} from './body-index/body-index.component';
import {RightComponent} from './right/right.component';
import {MessageSuccessModalComponent} from './message-success-modal/message-success-modal.component';
import {MessageFailModalComponent} from './message-fail-modal/message-fail-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FuramaRoutingModule} from './furama-routing.module';
import {CustomerModule} from './customer/customer.module';
import {ContractModule} from './contract/contract.module';
import {FacilityModule} from './facility/facility.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyIndexComponent,
    RightComponent,
    MessageSuccessModalComponent,
    MessageFailModalComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FuramaRoutingModule,
    CustomerModule,
    ContractModule,
    FacilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
