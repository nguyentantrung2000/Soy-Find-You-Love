import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGGService {
  public user!: User | null;
  constructor(private auth: Auth, private router: Router) {
    authState(this.auth).subscribe((user: User | null) => {
      this.user = user;
      console.log(this.user);
    });
  }
  public async loginGG() {
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
      this.router.navigate(['/match']);
    } catch (err) {
      alert('login fail!');
    }
  }
  public async logOut() {
    return await signOut(this.auth);
  }
}
