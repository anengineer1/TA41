import { TestBed } from '@angular/core/testing';

import { CharacterDetailServiceService } from './character-detail-service.service';

describe('CharacterDetailServiceService', () => {
  let service: CharacterDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
