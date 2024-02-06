import { Component } from '@angular/core';
import { LoanDataServiceService } from './../../loan-data-service.service';

@Component({
  selector: 'app-total-loans-borrowed',
  standalone: true,
  imports: [],
  templateUrl: './total-loans-borrowed.component.html',
  styleUrl: './total-loans-borrowed.component.css'
})
export class TotalLoansBorrowedComponent {
  totalLoans: number = 0;

  constructor(private loanDataServiceService: LoanDataServiceService) { }

  ngOnInit(): void {
    this.loanDataServiceService.getTotalLoans().subscribe(totalLoans => {
      this.totalLoans = totalLoans;
    })
  }

}
