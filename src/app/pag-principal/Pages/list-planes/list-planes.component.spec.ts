import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanesComponent } from './list-planes.component';

describe('ListPlanesComponent', () => {
  let component: ListPlanesComponent;
  let fixture: ComponentFixture<ListPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
