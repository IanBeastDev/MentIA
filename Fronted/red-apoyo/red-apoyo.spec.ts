import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedApoyo } from './red-apoyo';

describe('RedApoyo', () => {
  let component: RedApoyo;
  let fixture: ComponentFixture<RedApoyo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedApoyo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedApoyo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
