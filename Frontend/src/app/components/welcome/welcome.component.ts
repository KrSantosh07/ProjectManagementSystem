import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router:Router){}
  login(){
    this.router.navigate(['/user/login'])
  }
  signUp(){
    this.router.navigate(['/user/register'])
  }
}