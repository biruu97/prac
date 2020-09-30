import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreviousHistoriesforUserComponent } from './show-previous-historiesfor-user.component';

describe('ShowPreviousHistoriesforUserComponent', () => {
  let component: ShowPreviousHistoriesforUserComponent;
  let fixture: ComponentFixture<ShowPreviousHistoriesforUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPreviousHistoriesforUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPreviousHistoriesforUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
