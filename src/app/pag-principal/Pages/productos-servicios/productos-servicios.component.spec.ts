import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosServiciosComponent } from './productos-servicios.component';

describe('ProductosServiciosComponent', () => {
  let component: ProductosServiciosComponent;
  let fixture: ComponentFixture<ProductosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
