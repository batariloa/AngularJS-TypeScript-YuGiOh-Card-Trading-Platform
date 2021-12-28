import { Component, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() register: EventEmitter<any> = new EventEmitter();
  username:string="";
  password:string=""; 
  constructor(private loginService: FirebaseService, private router:Router) { }

  ngOnInit(): void {
  }

  async login(){
 await this.loginService.singin(this.username, this.password)
 if(this.loginService.isLoggedIn){
   this.loggedIn.emit(true);
   this.router.navigate(['/feed'])
 }
  }

  registerRedirect(){
    this.router.navigate(['/register'])

  }
}
