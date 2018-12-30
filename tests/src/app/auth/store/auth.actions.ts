import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  VerifyEmail = '[Auth] VerifyEmail',
  VerifyEmailFail = '[Auth] VerifyEmailFail',
}

export class VerifyEmail implements Action {
  readonly type = AuthActionTypes.VerifyEmail;

  constructor(public payload: {email: string}) { }
}

export class VerifyEmailFail implements Action {
  readonly type = AuthActionTypes.VerifyEmailFail;
}

export type AuthActions = VerifyEmail | VerifyEmailFail

