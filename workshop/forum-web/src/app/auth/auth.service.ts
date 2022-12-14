import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null; 

  get isLoggedIn() {
    return this.user !== null;
  }

  get isLoggedOut() {
    return this.user === null;
  }

  constructor() { }
}
