import { reducer, initialState } from './auth.reducer';
import { VerifyEmail, VerifyEmailFail } from './auth.actions';


describe('Auth Reducer', () => {
  it('should set email exist when VerifyEmail', () => {
    const email = 'tech@entire.pl';
    const state = reducer(initialState, new VerifyEmail({ email }));
    expect(state.email).toBe(email);
  });  

  it('should return correct errorMessage when email not exist', () => {
    const errorMessage = 'E-mail jest niepoprawny lub konto nie istnieje';
    const state = reducer(initialState, new VerifyEmailFail());
    expect(state.errorMessage).toBe(errorMessage);
  }); 
});
