import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertnewcharacterComponent } from './insertnewcharacter.component';

describe('InsertnewcharacterComponent', () => {
  let component: InsertnewcharacterComponent;
  let fixture: ComponentFixture<InsertnewcharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertnewcharacterComponent]
    });
    fixture = TestBed.createComponent(InsertnewcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
