// src/app/components/loading-placeholder/loading-placeholder.component.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-placeholder',
  standalone: true,
  template: `
    <div class="placeholder-wrap">
      @for (i of items(); track i) {
        <div class="placeholder-card">
          <div class="ph-line ph-title"></div>
          <div class="ph-line ph-sub"></div>
          <div class="ph-line ph-short"></div>
          <div class="ph-tags">
            <div class="ph-tag"></div>
            <div class="ph-tag"></div>
            <div class="ph-tag"></div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .placeholder-wrap {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .placeholder-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
    }
    .ph-line {
      height: 12px;
      border-radius: 6px;
      background: linear-gradient(90deg, var(--bg-card-hover) 25%, var(--border) 50%, var(--bg-card-hover) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .ph-title { width: 60%; height: 18px; }
    .ph-sub { width: 100%; }
    .ph-short { width: 80%; }
    .ph-tags { display: flex; gap: 0.5rem; }
    .ph-tag {
      width: 60px;
      height: 22px;
      border-radius: 4px;
      background: linear-gradient(90deg, var(--bg-card-hover) 25%, var(--border) 50%, var(--bg-card-hover) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class LoadingPlaceholderComponent {
  items = input<number[]>([1, 2, 3]);
}
