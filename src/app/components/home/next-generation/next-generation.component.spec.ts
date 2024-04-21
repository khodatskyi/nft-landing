import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGenerationComponent } from './next-generation.component';

describe('NextGenerationComponent', () => {
  let component: NextGenerationComponent;
  let fixture: ComponentFixture<NextGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextGenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
