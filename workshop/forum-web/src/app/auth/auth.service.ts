import { Injectable } from '@angular/core';
import { IUsername } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUsername | null = null; 

  get isLoggedIn() {
    return this.user !== null;
  }
  constructor() { }
}
