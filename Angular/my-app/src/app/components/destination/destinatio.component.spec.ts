import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatioComponent } from './destinatio.component';

describe('DestinatioComponent', () => {
  let component: DestinatioComponent;
  let fixture: ComponentFixture<DestinatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinatioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
