import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [];

@Component({
  selector: 'app-signup-buyer',
  templateUrl: './signup-buyer.component.html',
  styleUrls: ['./signup-buyer.component.css']
})
export class SignupBuyerComponent implements OnInit {

  alerts: Alert[];
  sex = 'choose sex';
  sexOptions: string[] = ['male', 'female'];

  constructor(private userService: SignupService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
  }

  /* sign up process */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.userService.postSignUp4Buyer(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('sign up sucess, jump to login');
            this.router.navigate(['/login']);
          } else {
            console.log('sign up faild');
            this.alerts.push({ type: 'danger', message: 'sign up error!' });
          }
        }
      );
    }
  }

  /* sing up checker */
  validInput(value: any): boolean {
    this.reset();
    if (!value.userId) {
      this.alerts.push({ type: 'danger', message: 'userId required!' });
      return false;
    }
    // password checker
    if (!value.password) {
      this.alerts.push({ type: 'danger', message: 'password required!' });
      return false;
    }
    if (value.password.length < 6) {
      this.alerts.push({ type: 'danger', message: 'password length must be greater than 6!' });
      return false;
    }
    if (!value.confirmpassword) {
      this.alerts.push({ type: 'danger', message: 'password required!' });
      return false;
    }
    if (value.confirmpassword.length < 6) {
      this.alerts.push({ type: 'danger', message: 'password length must be greater than 6!' });
      return false;
    }
    return true;
  }

  changeSex(newSex: string) {
    this.sex = newSex;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
