import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ChartType, ChartOptions, ChartDataset } from 'chart.js';
//import { Label } from 'ng2-charts';
import { LoanDataServiceService } from './../../loan-data-service.service';
import { NgChartsModule } from 'ng2-charts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-profits-per-month',
  standalone: true,
  imports: [
    NgChartsModule
  ],
  templateUrl: './profits-per-month.component.html',
  styleUrl: './profits-per-month.component.css'
})
export class ProfitsPerMonthComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  }
  public barChartLabels: string[] = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType: ChartType = 'bar';
  public barChartData: ChartDataset[] = [
    { data: [], label: 'Profits per month' }
  ];
  isBrowser: boolean = false;

  constructor(private loanDataServiceService: LoanDataServiceService,
              @Inject(PLATFORM_ID) private platformId: Object) { 
                this.isBrowser = isPlatformBrowser(this.platformId);
              }

  

  ngOnInit(): void {
    this.loanDataServiceService.getProfitsPerMonth().subscribe(profitsPerMonth => {
      this.barChartData[0].data = profitsPerMonth;
    })
  }

}
