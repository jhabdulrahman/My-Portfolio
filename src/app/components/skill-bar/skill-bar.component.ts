// src/app/components/skill-bar/skill-bar.component.ts
import { Component, input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  template: `
    <div class="skill-bar-item">
      <div class="skill-meta">
        <span class="skill-name">{{ name() }}</span>
        <span class="skill-pct">{{ level() }}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" [style.width.%]="animated ? level() : 0"></div>
      </div>
    </div>
  `,
  styles: [`
    .skill-bar-item { margin-bottom: 1.25rem; }
    .skill-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.4rem;
    }
    .skill-name {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-primary);
    }
    .skill-pct {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--accent);
    }
    .skill-track {
      background: var(--bg-card-hover);
      border-radius: 100px;
      height: 6px;
      overflow: hidden;
    }
    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent), var(--accent-alt));
      border-radius: 100px;
      transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `]
})
export class SkillBarComponent implements AfterViewInit {
  name = input<string>('');
  level = input<number>(0);
  animated = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => this.animated = true, 100);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(this.el.nativeElement);
  }
}
