import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url = this.router.url;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onClickLogin() {
    this.router.navigateByUrl(`${this.url}/monitor`);
  }
}
