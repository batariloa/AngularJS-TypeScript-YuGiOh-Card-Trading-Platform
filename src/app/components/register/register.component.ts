import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
forma:FormGroup ;
  constructor(private loginService: FirebaseService,private fb:FormBuilder, private router:Router) { 

    this.forma = this.fb.group({
      username: fb.control('',[Validators.required, Validators.minLength(6)]),
      email: fb.control('',[Validators.email,Validators.required]),
      password: fb.control('',[Validators.minLength(6),Validators.required]),
  })
}

  ngOnInit(): void {
  }

  async register(){
    if(this.forma.valid){
this.loginService.signup(this.email, this.password, this.username);

this.router.navigate(['/feed'])
}

  }
  public control(name:string){
    console.log(this.forma.get(name)?.errors)
    return this.forma.get(name);
  }
}