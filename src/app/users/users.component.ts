import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';
import { map } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users$!: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers().pipe(
      map(users => users.map(user => ({
        ...user,
        loanBalance: Math.floor(Math.random() * 10000),
        loanLimit: Math.floor(Math.random() * 20000) 
      })))
    );
  }
}
