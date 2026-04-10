import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGender } from './book-gender';

describe('BookGender', () => {
  let component: BookGender;
  let fixture: ComponentFixture<BookGender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookGender],
    }).compileComponents();

    fixture = TestBed.createComponent(BookGender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
