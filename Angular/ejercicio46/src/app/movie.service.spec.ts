import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('adding a cast member increases the cast member count by one', () => {
    const service: MovieService = TestBed.get(MovieService);
    const cant = service.castMembers.length;
    service.addCastMember('test', 'test');
    expect(service.castMembers.length).toBe(cant + 1);
  })

});
