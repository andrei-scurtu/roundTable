import { TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ManageComponent} from "@nx-starter/car-app/car-catalog/feature-manage";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ManageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageComponent],
      imports: [HttpClientTestingModule],
      providers: [
        HttpClientTestingModule,

      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ManageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
