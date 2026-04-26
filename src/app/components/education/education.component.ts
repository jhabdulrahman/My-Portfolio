// src/app/components/education/education.component.ts
import { Component, inject } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionWrapperComponent],
  template: `
    <app-section-wrapper sectionId="education" label="Academic" title="Education">
      @if (svc.data(); as d) {
        <div class="edu-grid">
          @for (edu of d.education; track edu.degree) {
            <div class="edu-card">
              <div class="edu-icon">🎓</div>
              <div class="edu-content">
                <h3 class="edu-degree">{{ edu.degree }}</h3>
                <p class="edu-institution">{{ edu.institution }}</p>
                <div class="edu-meta">
                  <span class="edu-period">{{ edu.period }}</span>
                  <span class="edu-cgpa">CGPA: {{ edu.cgpa }}</span>
                </div>
                <p class="edu-location">{{ edu.location }}</p>
              </div>
            </div>
          }
        </div>
      }
    </app-section-wrapper>
  `,
  styles: [`
    .edu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
      gap: 1.5rem;
      max-width: 960px;
      margin: 0 auto;
    }
    @media (max-width: 500px) {
      .edu-grid { grid-template-columns: 1fr; }
    }
    .edu-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.75rem;
      display: flex;
      gap: 1.25rem;
      transition: border-color 0.2s, transform 0.2s;
    }
    .edu-card:hover {
      border-color: var(--accent);
      transform: translateY(-2px);
    }
    .edu-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }
    .edu-content { flex: 1; }
    .edu-degree {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.35rem;
    }
    .edu-institution {
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin: 0 0 0.875rem;
    }
    .edu-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.35rem;
    }
    .edu-period {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: var(--text-muted);
    }
    .edu-cgpa {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--accent);
      font-weight: 700;
    }
    .edu-location {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin: 0;
    }
  `]
})
export class EducationComponent {
  svc = inject(PortfolioService);
}
