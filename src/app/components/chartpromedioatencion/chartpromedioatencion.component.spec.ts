import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpromedioatencionComponent } from './chartpromedioatencion.component';

describe('ChartpromedioatencionComponent', () => {
  let component: ChartpromedioatencionComponent;
  let fixture: ComponentFixture<ChartpromedioatencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartpromedioatencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartpromedioatencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
