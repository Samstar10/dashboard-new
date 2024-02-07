import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TotalLoansBorrowedComponent } from './total-loans-borrowed/total-loans-borrowed.component';
import { AmountBorrowedLastMonthComponent } from './amount-borrowed-last-month/amount-borrowed-last-month.component';
import { TotalProfitsComponent } from './total-profits/total-profits.component';
import { ProfitsPerMonthComponent } from './profits-per-month/profits-per-month.component';
import { DefaultedLoansComponent } from './defaulted-loans/defaulted-loans.component';
import { LoanBorrowedCountryComponent } from './loan-borrowed-country/loan-borrowed-country.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { LoanDataServiceService } from '../loan-data-service.service';
import { ChartType, ChartOptions, ChartDataset } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TotalLoansBorrowedComponent,
    AmountBorrowedLastMonthComponent,
    TotalProfitsComponent,
    ProfitsPerMonthComponent,
    DefaultedLoansComponent,
    LoanBorrowedCountryComponent,
    SideBarComponent,
    NavigationBarComponent,
    NgChartsModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  totalLoans: number = 0;
  defaultedLoans: number = 0;
  amountBorrowedLastMonth: number = 0;
  totalProfits: number = 0;
  public barChartOptions: ChartOptions = {
    responsive: true,
  }
  public barChartLabels: string[] = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType: ChartType = 'bar';
  public barChartData: ChartDataset[] = [
    { data: [], label: 'Profits per month' }
  ];
  isBrowser: boolean = false;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  }
  public pieChartLabels: string[] = [];
  public pieChartData: ChartDataset<'pie'>[] = [];
  public pieChartType: ChartType = 'pie';

  constructor(private loanDataServiceService: LoanDataServiceService,
              @Inject(PLATFORM_ID) private platformId: Object) {
                this.isBrowser = isPlatformBrowser(this.platformId);
              }

  ngOnInit(): void {
    this.loanDataServiceService.getTotalLoans().subscribe(totalLoans => {
      this.totalLoans = totalLoans;
    })

    this.loanDataServiceService.getDefaultedLoans().subscribe(defaultedLoans => {
      this.defaultedLoans = defaultedLoans;
    })

    this.loanDataServiceService.getTotalLoansLastMonth().subscribe(amountBorrowedLastMonth => {
      this.amountBorrowedLastMonth = amountBorrowedLastMonth;
    })

    this.loanDataServiceService.getTotalProfits().subscribe(totalProfits => {
      this.totalProfits = totalProfits;
    })

    this.loanDataServiceService.getProfitsPerMonth().subscribe(profitsPerMonth => {
      this.barChartData[0].data = profitsPerMonth;
    })

    this.loanDataServiceService.getLoansByCountry().subscribe(data => {
      this.pieChartLabels = data.map(d => d.country);
      this.pieChartData = [
        {
          data: data.map(d => d.amount), 
        }
      ];
    });
  }

}
