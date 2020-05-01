import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  alerts: Alert[];
  closeResult = '';

  constructor(private userService: UserService, private router: Router, private modalService: NgbModal) {
    this.reset();
  }

  ngOnInit(): void {
  }

  /* login process */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      // TODO Send the request when the microservice is completed
      // this.userService.postLogin(value).subscribe(
      //   data => {
      //     console.log(JSON.stringify(data));
      //     const info: any = data;
      //     if (200 === info.code) {
      //         console.log('login sucess, jump to SearchItems');
      //         this.router.navigate(['/searchItems']);
      //     } else {
      //       console.log('login faild');
      //       this.alerts.push({type : 'danger', message: 'username or password error!'});
      //     }
      //   }
      // );
      this.router.navigate(['/searchItems']);
    }
  }
  /* login checker */
  validInput(value: any): boolean {
    this.reset();
    if (!value.name) {
      this.alerts.push({ type: 'danger', message: 'username required!' });
      return false;
    }

    if (!value.password) {
      this.alerts.push({ type: 'danger', message: 'password required!' });
      return false;
    }

    if (value.password.length < 6) {
      this.alerts.push({ type: 'danger', message: 'password length must be greater than 6!' });
      return false;
    }
    return true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

      if (result === 'buyer') {
        this.router.navigate(['/signup-buyer']);
      } else {
        this.router.navigate(['/signup-seller']);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
