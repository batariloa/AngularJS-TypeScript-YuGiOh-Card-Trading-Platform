import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email:string="";
  password:string=""; 
  username:string="";

  constructor(private loginService: FirebaseService) { }

  ngOnInit(): void {
  }

  async register(){
this.loginService.signup(this.email, this.username, this.password);

  }
}