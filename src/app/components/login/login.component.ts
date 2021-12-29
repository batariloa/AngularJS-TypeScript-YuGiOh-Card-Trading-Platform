import { Component, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() register: EventEmitter<any> = new EventEmitter();
  username:string="";
  password:string=""; 
  constructor(private loginService: FirebaseService, private router:Router, private session: SessionServiceService) { }

  ngOnInit(): void {
  }

  async login(){
 await this.loginService.singin(this.username, this.password)
 if(this.loginService.isLoggedIn){
  this.session.isLoggedIn = true;
  console.log("ovo je login btn " + this.loginService.isLoggedIn)
   this.router.navigate(['/feed'])
 }
  }

  registerRedirect(){
    this.router.navigate(['/register'])

  }
}
