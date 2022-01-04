import { Component, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SessionServiceService } from 'src/app/services/session-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() register: EventEmitter<any> = new EventEmitter();
  username: string = "";
  password: string = "";
  submitted = false;
  authenticationFailed = false;
  forma: FormGroup;
  constructor(private loginService: FirebaseService, private router: Router, private session: SessionServiceService, private fb:
    FormBuilder) {

    this.forma = this.fb.group({

      email: fb.control('', [Validators.email, Validators.required]),
      password: fb.control('', [Validators.minLength(6), Validators.required]),
    })

  }

  ngOnInit(): void {

  }

  async login() {
    this.submitted = true;

    if (this.forma.valid)
      this.authenticationFailed = true

    this.loginService.signin(this.username, this.password).then(
      () => {

        if (sessionStorage.getItem('login') == "true") {

          this.router.navigate(['/feed'])

        }
        else {

        }
      }
    );

  }

  registerRedirect() {
    this.router.navigate(['/register'])

  }

  public control(name: string) {
    console.log(this.forma.get(name)?.errors)
    return this.forma.get(name);
  }
}
