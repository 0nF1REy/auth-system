import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'auth-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, OnDestroy {
  terminalLines = signal<string[]>([]);
  private timeoutIds: any[] = [];

  ngOnInit() {
    this.runBootSequence();
  }

  ngOnDestroy() {
    this.timeoutIds.forEach((id) => clearTimeout(id));
  }

  private addLine(text: string, delay: number) {
    const id = setTimeout(() => {
      this.terminalLines.update((lines) => [...lines, text]);
    }, delay);
    this.timeoutIds.push(id);
  }

  private runBootSequence() {
    const sequence = [
      'Initializing Auth_System v21.0.0...',
      'Loading core_modules... OK',
      'Establishing secure connection to Auth_Node... DONE',
      'Scanning for signals... 12 active signals found.',
      'ChangeDetectionMode: Zoneless',
      '----------------------------------------',
      'AUTHENTICATION SUCCESSFUL.',
      'Welcome back, User.',
      'System is ready for commands.',
    ];

    sequence.forEach((line, index) => {
      this.addLine(line, index * 600);
    });
  }
}
