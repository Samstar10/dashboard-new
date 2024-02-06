import { Component } from '@angular/core';
import { TotalLoansBorrowedComponent } from './total-loans-borrowed/total-loans-borrowed.component';
import { AmountBorrowedLastMonthComponent } from './amount-borrowed-last-year/amount-borrowed-last-month.component';
import { TotalProfitsComponent } from './total-profits/total-profits.component';
import { ProfitsPerMonthComponent } from './profits-per-month/profits-per-month.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TotalLoansBorrowedComponent,
    AmountBorrowedLastMonthComponent,
    TotalProfitsComponent,
    ProfitsPerMonthComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
