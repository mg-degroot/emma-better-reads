import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookNewComponent } from './book-new.component';

describe('BookEditComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
