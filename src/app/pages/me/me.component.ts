import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

const USER_INFO: User = {
  userId: '1',
  userName: 'John',
  sex: 'male',
  age: '20',
  adress: '10 gaoneng street',
  city: 'Dalian',
  state: 'High-tech Zone',
  zip: '116000',
  isSellerFlg: true
};

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    this.doSearch();
  }

  /**
   * seach user infomation.
   */
  doSearch() {
    // TODO Send the request when the microservice is completed
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.userService.getUserInfo(user.userId)
    //   )
    // ).subscribe(items => this.user = items as User);
    this.user = USER_INFO;
  }

}
