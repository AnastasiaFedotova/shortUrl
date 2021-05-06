import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerUrlComponent } from './shortener-url.component';

describe('ShortenerUrlComponent', () => {
  let component: ShortenerUrlComponent;
  let fixture: ComponentFixture<ShortenerUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenerUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
