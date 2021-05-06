import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLinkInputComponent } from './short-link-input.component';

describe('ShortLinkInputComponent', () => {
  let component: ShortLinkInputComponent;
  let fixture: ComponentFixture<ShortLinkInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortLinkInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortLinkInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
