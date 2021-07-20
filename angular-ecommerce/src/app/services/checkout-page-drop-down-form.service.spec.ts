import { TestBed } from '@angular/core/testing';

import { CheckoutPageDropDownFormService } from './checkout-page-drop-down-form.service';

describe('CheckoutPageDropDownFormService', () => {
  let service: CheckoutPageDropDownFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutPageDropDownFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
