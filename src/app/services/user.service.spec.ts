import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {User} from '../models/User';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('test query data', () => {
    service.getUserInfo('1').subscribe(user => {
      expect((user as User).userId.length).toBeGreaterThan(0);
    });
  });
});
