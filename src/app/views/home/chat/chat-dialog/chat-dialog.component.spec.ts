import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ChabotDialogComponent} from './chat-dialog.component';


describe('ChatDialogComponent', () => {
  let component: ChabotDialogComponent;
  let fixture: ComponentFixture<ChabotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChabotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChabotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
