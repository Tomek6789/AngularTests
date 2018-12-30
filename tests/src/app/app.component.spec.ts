import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { StoreModule, Store } from '@ngrx/store';
import { State } from 'src/app/app.reducers';
import { reducer } from './auth/store/auth.reducer';

const initialState = {
  auth: {
    errorMessage: 'initial error message'
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<State>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ auth: reducer }, { initialState })],
      declarations: [ AppComponent ]
    })

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    store = TestBed.get(Store);
  });
  
  it('should display error from stub initial state', () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toContain(initialState.auth.errorMessage);
  });

  it('should click', () => {
    spyOn(store, 'dispatch');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', 'email');
    expect(store.dispatch).toHaveBeenCalled();
  })

});
