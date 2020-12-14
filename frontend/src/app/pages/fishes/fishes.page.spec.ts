import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FishesPage } from './fishes.page';

describe('FishesPage', () => {
  let component: FishesPage;
  let fixture: ComponentFixture<FishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
