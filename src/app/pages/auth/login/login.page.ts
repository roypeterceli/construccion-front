import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService, SettingService } from '@wow/core/services';
import { AlertDialogService } from '@wow/shared/components/alert';
import { fadeInUp400ms } from '@wow/shared/animations';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'wow-login-page',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule
  ],
  animations: [fadeInUp400ms],
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup<any>({});
  hidden = signal<boolean>(true);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private alertService = inject(AlertDialogService);
  settingService = inject(SettingService);

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    const { email, password, cex_type } = this.loginForm.value;

    this.authService.login(email, password, cex_type).subscribe({
      error: (err) => this.errorMessage(err.error),
      complete: () => this.router.navigateByUrl('/')
    })
  }

  toggleVisibility(event: MouseEvent): void {
    this.hidden.set(!this.hidden());
    event.stopPropagation();
  }

  private errorMessage(error: { sCodigo: number; sMessage: string }): void {
    this.alertService.error({
      title: error.sCodigo ? '¡Usuario bloqueado!' : 'Información',
      message: error.sMessage,
    })
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cex_type: ['', [Validators.required]]
    });
  }

}
