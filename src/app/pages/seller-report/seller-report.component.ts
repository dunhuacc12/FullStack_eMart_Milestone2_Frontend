import { Component, OnInit, Injectable } from '@angular/core';
import { SellerReportListItem } from '../../models/SellerReportListItem';
import { SellerReport } from '../../models/SellerReport';
import { SellerReportService } from '../../services/sellerReport.service';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}
@Component({
  selector: 'app-seller-report',
  templateUrl: './seller-report.component.html',
  styleUrls: ['./seller-report.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ],
})
export class SellerReportComponent implements OnInit {

  selectedStartDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;
  sellerReport: SellerReport = {
    startDate: null,
    endDate: null,
    userId: null
  };
  sellerReportList: SellerReportListItem[] = [];

  constructor(private sellerReportService: SellerReportService, private formater: NgbDateParserFormatter) { }

  ngOnInit(): void {
  }

  onView() {
    // get user id from localStorage
    const userId = localStorage.getItem('userId');
    this.sellerReport.userId = userId;
    this.sellerReport.startDate = this.formater.format(this.selectedStartDate);
    this.sellerReport.endDate = this.formater.format(this.selectedEndDate);
    // add this item to cart
    this.sellerReportService.postGetSellerReport(this.sellerReport)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('search seller report successfull');
            this.sellerReportList = info.data;
          } else {
            console.log('search seller report faild');
          }
        }
      );
  }
}
