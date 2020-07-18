import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCardsComponent } from './browse-cards.component';

describe('BrowseCardsComponent', () => {
  let component: BrowseCardsComponent;
  let fixture: ComponentFixture<BrowseCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
