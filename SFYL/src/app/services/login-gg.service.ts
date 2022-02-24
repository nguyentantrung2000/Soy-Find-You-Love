import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginGGService {
  public user!: User | null;
  constructor(private auth: Auth) {
    authState(this.auth).subscribe((user: User | null) => {
      this.user = user;
    });
  }
  public async loginGG() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  public async logOut() {
    return await signOut(this.auth);
  }
}
