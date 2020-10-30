import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropsComponent } from './input-props.component';

describe('InputPropsComponent', () => {
  let component: InputPropsComponent;
  let fixture: ComponentFixture<InputPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
