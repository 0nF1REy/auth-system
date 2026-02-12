import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
