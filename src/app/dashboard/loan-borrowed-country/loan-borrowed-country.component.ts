import { Component } from '@angular/core';
import { LoanDataServiceService } from '../../loan-data-service.service';
import { ChartType, ChartOptions, ChartDataset } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-loan-borrowed-country',
  standalone: true,
  imports: [
    NgChartsModule
  ],
  templateUrl: './loan-borrowed-country.component.html',
  styleUrl: './loan-borrowed-country.component.css'
})
export class LoanBorrowedCountryComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  }
  public pieChartLabels: string[] = [];
  public pieChartData: ChartDataset<'pie'>[] = [];
  public pieChartType: ChartType = 'pie';

  constructor(private loanDataServiceService: LoanDataServiceService) { }

  ngOnInit(): void {
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
