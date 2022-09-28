import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ClientsComponent } from './clients/clients.component';
import { LogsComponent } from './logs/logs.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dasboard',
        redirectTo: '/'
      },
      {
        path: 'bookings',
        component: BookingsComponent
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'logs',
        component: LogsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
