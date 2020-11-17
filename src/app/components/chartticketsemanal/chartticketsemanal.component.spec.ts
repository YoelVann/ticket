import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTicketSemanalComponent } from './chartticketsemanal.component';

describe('Chart1Component', () => {
  let component: ChartTicketSemanalComponent;
  let fixture: ComponentFixture<ChartTicketSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTicketSemanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTicketSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
