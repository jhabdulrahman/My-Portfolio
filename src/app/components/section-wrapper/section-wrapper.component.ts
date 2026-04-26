// src/app/components/section-wrapper/section-wrapper.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [id]="sectionId()" class="section-wrapper">
      <div class="section-inner">
        @if (title()) {
          <div class="section-header">
            <span class="section-label">{{ label() }}</span>
            <h2 class="section-title">{{ title() }}</h2>
            <div class="section-divider"></div>
          </div>
        }
        <ng-content />
      </div>
    </section>
  `,
  styles: [`
    .section-wrapper {
      padding: 6rem 1.5rem;
      position: relative;
    }
    .section-inner {
      max-width: 1100px;
      margin: 0 auto;
    }
    .section-header {
      text-align: center;
      margin-bottom: 3.5rem;
    }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      display: block;
      margin-bottom: 0.5rem;
    }
    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: var(--text-primary);
      margin: 0 0 1.25rem;
    }
    .section-divider {
      width: 3rem;
      height: 3px;
      background: var(--accent);
      margin: 0 auto;
      border-radius: 2px;
    }
  `]
})
export class SectionWrapperComponent {
  sectionId = input<string>('');
  title = input<string>('');
  label = input<string>('');
}
