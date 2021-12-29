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
    console.log("nemoj zekis  "+ sessionStorage.getItem('login') )
  }

  async login(){
 this.loginService.singin(this.username, this.password).then(
   () =>{
    console.log("trenutno je " + sessionStorage.getItem('login'))
    if(sessionStorage.getItem('login') == "true"){
   
      this.router.navigate(['/feed'])
    }
   }
 );

  }

  registerRedirect(){
    this.router.navigate(['/register'])

  }
}
