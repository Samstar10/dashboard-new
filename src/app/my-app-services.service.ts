import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class MyAppServicesService {

  private apiUrl = 'https://loanish.lol/api/v1/user/adminLogin'

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginPayLoad = { username, password };

    return this.http.post<any>(this.apiUrl, loginPayLoad).pipe(
      map(response => {
        if (response && response.success){
          return { message: response.message, success: true, admin: response.admin };
        } else {
          return {
            success: false,
            message: 'Invalid credentials'
          }
        }
      }),
      catchError(error => {
        return throwError(() => new Error(error.message || 'Server error'));
      })
    );
  }
}
