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
  public location: any = JSON.parse(
    localStorage.getItem('dataSource') as string
  );
  public user!: User | null;
  constructor(private auth: Auth, private router: Router) {
    authState(this.auth).subscribe((user: User | null) => {
      this.user = user;
    });
  }
  public checkAuth(): boolean {
    if (!this.user) {
      return false;
    }
    return true;
  }
  public async loginGG() {
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider()).then(
        (data) => {
          this.user = data.user;
          // this.router.navigate(['/layout/match']);
        }
      );
    } catch (err) {
      alert('login fail!');
    }
  }
  public async logOut() {
    await signOut(this.auth);
    this.router.navigate(['']);
  }
}
