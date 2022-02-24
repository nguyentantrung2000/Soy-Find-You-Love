import { TestBed } from '@angular/core/testing';

import { LoginGGService } from './login-gg.service';

describe('LoginGGService', () => {
  let service: LoginGGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
