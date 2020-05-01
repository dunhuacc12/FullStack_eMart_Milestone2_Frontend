import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgForm } from '@angular/forms';
import { SellerReportComponent } from './seller-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('SellerReportComponent', () => {
  let component: SellerReportComponent;
  let fixture: ComponentFixture<SellerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, NgbModule],
      declarations: [SellerReportComponent, NgForm]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
