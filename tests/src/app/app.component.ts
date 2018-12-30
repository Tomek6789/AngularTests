import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/app.reducers';
import { VerifyEmail } from './auth/store/auth.actions';
import { selectErrorMessage } from './auth/store/auth.selectors'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  errorMessage$ = this.store.pipe(select(selectErrorMessage))

  constructor(private store: Store<State>) {}

  setEmail(email: string) {
    this.store.dispatch(new VerifyEmail({ email }));
  }
}
