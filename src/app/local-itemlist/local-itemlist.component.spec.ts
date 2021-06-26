import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalItemListComponent } from './local-itemlist.component';

describe('LocalItemListComponent', () => {
  let component: LocalItemListComponent;
  let fixture: ComponentFixture<LocalItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
