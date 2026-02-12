import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthRequest, Usuario } from '../../services/auth-service';

// Definição da estrutura do formulário
interface AuthForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

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

  form!: FormGroup<AuthForm>;
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

    const credentials = this.form.getRawValue() as AuthRequest;

    if (this.isLoginMode()) {
      this.authService.login(credentials).subscribe({
        next: (usuario: Usuario | null) => {
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
        next: (msg: string) => {
          alert(msg);
          this.toggleMode();
        },
      });
    }
  }
}
