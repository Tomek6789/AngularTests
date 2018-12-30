import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, getErrorMessage, getEmail } from './auth.reducer';

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectErrorMessage = createSelector(
    selectAuthState,
    getErrorMessage,
)

export const selectEmail = createSelector(
    selectAuthState,
    getEmail,
)