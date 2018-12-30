import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
  errorMessage: string;
  email: string;
}

export const initialState: State = {
  errorMessage: '',
  email: '',
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.VerifyEmail:
      return {
        ...state,
        email: action.payload.email,
      };

    case AuthActionTypes.VerifyEmailFail:
      return { 
        ...state,
        errorMessage: 'E-mail jest niepoprawny lub konto nie istnieje',
      };

    default:
      return state;
  }
}

export const getErrorMessage = (state: State) => state.errorMessage;
export const getEmail = (state: State) => state.email;
