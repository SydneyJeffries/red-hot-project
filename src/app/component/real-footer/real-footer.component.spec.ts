import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealFooterComponent } from './real-footer.component';

describe('RealFooterComponent', () => {
  let component: RealFooterComponent;
  let fixture: ComponentFixture<RealFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
