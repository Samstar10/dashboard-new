import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanDataServiceService {

  constructor() { }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getTotalLoans(): Observable<number> {
    return of(this.getRandomNumber(100000, 500000));
  }

  getTotalLoansLastMonth(): Observable<number> {
    return of(this.getRandomNumber(10000, 50000));
  }

  getTotalLoansLastYear(): Observable<number> {
    return of(this.getRandomNumber(1000000, 5000000));
  }

  getTotalProfits(): Observable<number> {
    return of(this.getRandomNumber(1000000, 5000000));
  }

  getDefaultedLoans(): Observable<number> {
    return of(this.getRandomNumber(1000, 5000));
  }

  getProfitsPerMonth(): Observable<number[]> {
    let monthlyProfits = [];
    for (let month = 0; month < 12; month++) {
      monthlyProfits.push(this.getRandomNumber(1000, 10000)); 
    }
    return of(monthlyProfits);
  }

  getLoansByCountry(): Observable<any[]> {
    const loansByCountry = [
      { country: 'Kenya', amount: 30000 },
      { country: 'Tanzania', amount: 25000 },
      { country: 'Uganda', amount: 20000 },
    ]
    return of(loansByCountry)
  }
}
