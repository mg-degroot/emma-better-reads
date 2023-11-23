import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WriterNewComponent } from './writer-new.component';

describe('WriterEditComponent', () => {
  let component: WriterNewComponent;
  let fixture: ComponentFixture<WriterNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriterNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WriterNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
