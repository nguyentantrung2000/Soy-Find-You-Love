import { TestBed } from '@angular/core/testing';

import { UserCharService } from './user-chat.service';

describe('UserCharService', () => {
  let service: UserCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
