import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [];

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  alerts: Alert[];
  category = 'Electronics';
  subcategory = 'Mobile';

  descriptionsArr = ['description1', 'description2', 'description3'];

  categoryOptions = ['Electronics', 'Clothing', 'Sports'];
  subcategoryOptions = ['Mobile', 'TV', 'camera'];

  constructor() {
    this.reset();
  }

  ngOnInit(): void {
  }

  /* add item process */
  onSubmit(value: any) {
    console.log(JSON.stringify(value));
    if (this.validInput(value)) {
      // TODO Send the request when the microservice is completed
      // this.userService.postSignUp4Buyer(value).subscribe(
      //   data => {
      //     console.log(JSON.stringify(data));
      //     const info: any = data;
      //     if (200 === info.code) {
      //         console.log('sign up sucess, jump to login');
      //         this.router.navigate(['/login']);
      //     } else {
      //       console.log('sign up faild');
      //       this.alerts.push({type : 'danger', message: 'sign up error!'});
      //     }
      //   }
      // );
    }
  }

  /* checker */
  validInput(value: any): boolean {
    this.reset();
    if (!value.itemName) {
      this.alerts.push({ type: 'danger', message: 'item name required!' });
      return false;
    }
    return true;
  }

  changeCategory(newCategory: string) {
    this.category = newCategory;
  }

  changeSubcategory(newCategory: string) {
    this.subcategory = newCategory;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  addDescription() {
    this.descriptionsArr.push(`description${this.descriptionsArr.length + 1}`);
  }
}
