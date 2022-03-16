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
    localStorage.getItem('_location') as string
  );
  public user!:any;
  constructor(private auth: Auth, private router: Router) {
    authState(this.auth).subscribe((user: User | null) => {
      this.user = user;
      console.log(this.user);
    });
  }
  public loginGG() {
    // try {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
    // this.router.navigate(['/layout/match']);
    // } catch (err) {
    //   alert('login fail!');
    // }
  }
  public async logOut() {
    await signOut(this.auth);
    this.router.navigate(['']);
  }
}
