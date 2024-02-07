import { Component } from '@angular/core';
import { LoanDataServiceService } from '../../loan-data-service.service';

@Component({
  selector: 'app-amount-borrowed-last-month',
  standalone: true,
  imports: [

  ],
  templateUrl: './amount-borrowed-last-month.component.html',
  styleUrl: './amount-borrowed-last-month.component.css'
})
export class AmountBorrowedLastMonthComponent {
  amountBorrowedLastMonth: number = 0;

  constructor(private loanDataServiceService: LoanDataServiceService) { }

  ngOnInit(): void {
    this.loanDataServiceService.getTotalLoansLastMonth().subscribe(amountBorrowedLastMonth => {
      this.amountBorrowedLastMonth = amountBorrowedLastMonth;
    })
  }

}
