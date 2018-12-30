import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('auth', fromAuth.reducer),
    CommonModule
  ]
})
export class AuthModule { }
