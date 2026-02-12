import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'auth-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Auth implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  form!: FormGroup;
  isLoginMode = signal(true);

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(): void {
    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleMode(): void {
    this.isLoginMode.update((v) => !v);
    this.form.reset();
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const credentials = this.form.value;

    if (this.isLoginMode()) {
      this.authService.login(credentials).subscribe({
        next: (usuario) => {
          if (usuario) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            this.router.navigate(['/home']);
          } else {
            alert('Email ou senha inválidos');
          }
        },
      });
    } else {
      this.authService.cadastrar(credentials).subscribe({
        next: (msg) => {
          alert(msg);
          this.toggleMode();
        },
      });
    }
  }
}
