import { Component } from '@angular/core';
import { LoanDataServiceService } from './../../loan-data-service.service';

@Component({
  selector: 'app-total-profits',
  standalone: true,
  imports: [],
  templateUrl: './total-profits.component.html',
  styleUrl: './total-profits.component.css'
})
export class TotalProfitsComponent {
  totalProfits: number = 0;

  constructor(private loanDataServiceService: LoanDataServiceService) { }

  ngOnInit(): void {
    this.loanDataServiceService.getTotalProfits().subscribe(totalProfits => {
      this.totalProfits = totalProfits;
    })
  }

}
