import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [UserService]
})
export class StartComponent implements OnInit {
  user: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(name: string){
    var userName: User = new User(name);
    USERS.push(userName);
  }

}
