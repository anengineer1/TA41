import { TestBed } from '@angular/core/testing';

import { CharacterListServiceService } from './character-list-service.service';

describe('CharacterListServiceService', () => {
  let service: CharacterListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
