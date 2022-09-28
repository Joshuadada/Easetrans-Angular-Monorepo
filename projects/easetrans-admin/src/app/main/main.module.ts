import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientsComponent } from './clients/clients.component';
import { LogsComponent } from './logs/logs.component';
import { BookingsComponent } from './bookings/bookings.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    TransactionsComponent,
    SettingsComponent,
    ClientsComponent,
    LogsComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
