import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfdComponent } from './gfd.component';

describe('GfdComponent', () => {
  let component: GfdComponent;
  let fixture: ComponentFixture<GfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GfdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
