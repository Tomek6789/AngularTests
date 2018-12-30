import { selectErrorMessage, selectEmail } from './auth.selectors';
import { State, initialState } from './auth.reducer';

describe('selectAuthenthicated', () => {
  it('should return errorMessage', () => {
    const state: State = {
      ...initialState,
      errorMessage: 'error message',
    };
    expect(selectErrorMessage.projector(state)).toBe(state.errorMessage);
  })

  it('should return email', () => {
    const state: State = {
      ...initialState,
      email: 'tech@entire.pl',
    };
    expect(selectEmail.projector(state)).toBe(state.email);
  });
})