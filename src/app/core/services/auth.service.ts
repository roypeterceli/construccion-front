import { computed, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@wow/env/environment';
import { tap } from 'rxjs';
import { User } from '@wow/core/interfaces';

import { Router } from '@angular/router';

export const USER_LOCAL_STORAGE_KEY = 'user';
export const TOKEN_LOCAL_STORAGE_KEY = 'token';
// export const CEX_LOCAL_STORAGE_KEY = 'cex';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = computed(() => this.getUser());
  token = computed(() => this.getToken());
  userLoggedIn = computed(() => !!this.token());
  // cexId = computed(()=> this.getCexId());

  private http = inject(HttpClient);

  // private router = inject(Router);

  login(email: string, password: string, cex_type: string) {
    const request = { email, password };
    return this.http.post(`${ environment.api.sgc }/auth/login`, request).pipe(
      tap((res: any) => {
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(res.aUsuario));
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, res.stoken);
        // localStorage.setItem(CEX_LOCAL_STORAGE_KEY, cex_type);
        // this.router.navigate(['/atenciones']);
        // this.router.navigate(['/dashboard']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
    // localStorage.removeItem(CEX_LOCAL_STORAGE_KEY);
  }

  private getUser(): User | null | undefined {
    const json = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    return json ? JSON.parse(json) : null;

  }

  getUserLogged(){
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getCexSelected(){
    const cex = localStorage.getItem('cex');
    return cex ? JSON.parse(cex) : null;
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('user') !== null;
  }

  private getToken(): string | null {
    return localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  }

  // private getCexId(): number | null {
  //   const cexId = localStorage.getItem(CEX_LOCAL_STORAGE_KEY);
  //   return cexId ? Number(cexId) : null;
  // }

}
