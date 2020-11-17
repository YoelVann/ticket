import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartClientesComponent } from './chartclientes.component';

describe('Chart2Component', () => {
  let component: ChartClientesComponent;
  let fixture: ComponentFixture<ChartClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
