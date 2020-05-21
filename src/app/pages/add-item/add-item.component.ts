import { Component, OnInit } from '@angular/core';
import { DropdownOption } from '../../models/DropdownOption';
import { AddItemService } from '../../services/addItem.service';
import { AddItem } from '../../models/AddItem';
import { Router } from '@angular/router';

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

  addItemDto: AddItem = {
    userId: '',
    categoryValue: null,
    categoryLabel: '',
    subcategoryValue: null,
    subcategoryLabel: '',
    itemName: '',
    price: null,
    stockNumber: null,
    descriptions: [
      { descriptionValue: '', descriptionLabel: '', sort: 1 },
      { descriptionValue: '', descriptionLabel: '', sort: 2 },
      { descriptionValue: '', descriptionLabel: '', sort: 3 }
    ]
  };
  categoryOptions: DropdownOption[] = [{ value: 1, label: 'Electronics' }, { value: 2, label: 'Clothing' }, { value: 3, label: 'Sports' }];
  subcategoryOptions: DropdownOption[] = [{ value: 1, label: 'Mobile' }, { value: 2, label: 'TV' }, { value: 3, label: 'camera' }];
  alerts: Alert[];

  constructor(private addItemService: AddItemService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
    this.initCategoryOptions();
  }

  /**
   * category options init process.
   */
  initCategoryOptions() {
    this.addItemService.getCategoryOptions()
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            this.categoryOptions = info.data;
            if (this.categoryOptions !== null && this.categoryOptions.length > 0) {
              this.changeCategory(this.categoryOptions[0]);
              this.initSubcategoryOptions();
            }
            console.log('init Dropdown successfull');
          } else {
            console.log('init Dropdown faild');
          }
        }
      );
  }

  /**
   * sub category options init process.
   */
  initSubcategoryOptions() {
    this.addItemService.getSubcategoryOptions(this.addItemDto.categoryValue)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            this.subcategoryOptions = info.data;
            if (this.subcategoryOptions !== null && this.subcategoryOptions.length > 0) {
              this.changeSubcategory(this.subcategoryOptions[0]);
            }
            console.log('init Dropdown successfull');
          } else {
            console.log('init Dropdown faild');
          }
        }
      );
  }

  /**
   * add item process.
   *
   * @param value form value
   */
  onSubmit(value: any) {
    // get user id from localStorage
    const userId = localStorage.getItem('userId');
    this.addItemDto.userId = userId;
    console.log(JSON.stringify(value));
    if (this.validInput(this.addItemDto)) {
      this.addItemService.postAddItem(this.addItemDto).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('add item successfull');
            this.router.navigate(['/mystore']);
          } else {
            console.log('add item faild');
            this.alerts.push({ type: 'danger', message: 'add item error!' });
          }
        }
      );
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

  /**
   * Category dropdown changed process.
   *
   * @param newCategory the option of category
   */
  changeCategory(newCategory: DropdownOption) {
    this.addItemDto.categoryValue = newCategory.value;
    this.addItemDto.categoryLabel = newCategory.label;
    this.initSubcategoryOptions();
  }

  /**
   * Sub category dropdown changed process.
   * @param newCategory the option of sub category
   */
  changeSubcategory(newCategory: DropdownOption) {
    this.addItemDto.subcategoryValue = newCategory.value;
    this.addItemDto.subcategoryLabel = newCategory.label;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  addDescription() {
    this.addItemDto.descriptions.push({ descriptionValue: '', descriptionLabel: '', sort: this.addItemDto.descriptions.length + 1 });
  }
}
