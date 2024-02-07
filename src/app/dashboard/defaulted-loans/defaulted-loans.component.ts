import { Component } from '@angular/core';
import { LoanDataServiceService } from './../../loan-data-service.service';

@Component({
  selector: 'app-defaulted-loans',
  standalone: true,
  imports: [],
  templateUrl: './defaulted-loans.component.html',
  styleUrl: './defaulted-loans.component.css'
})
export class DefaultedLoansComponent {
  defaultedLoans: number = 0;

  constructor(private loanDataServiceService: LoanDataServiceService) { }

  ngOnInit(): void {
    this.loanDataServiceService.getDefaultedLoans().subscribe(defaultedLoans => {
      this.defaultedLoans = defaultedLoans;
    })
  }

}
