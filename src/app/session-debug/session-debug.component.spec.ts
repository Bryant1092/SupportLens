import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDebugComponent } from './session-debug.component';

describe('SessionDebugComponent', () => {
  let component: SessionDebugComponent;
  let fixture: ComponentFixture<SessionDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionDebugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
