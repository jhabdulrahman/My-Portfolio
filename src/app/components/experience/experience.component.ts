// src/app/components/experience/experience.component.ts
import { Component, inject } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionWrapperComponent],
  template: `
    <app-section-wrapper sectionId="experience" label="Career" title="Work Experience">
      @if (svc.data(); as d) {
        <div class="timeline">
          @for (exp of d.experience; track exp.company; let last = $last) {
            <div class="timeline-item" [class.last]="last">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
                @if (!last) {
                  <div class="marker-line"></div>
                }
              </div>
              <div class="timeline-card">
                <div class="exp-header">
                  <div>
                    <h3 class="exp-role">{{ exp.role }}</h3>
                    <p class="exp-company">{{ exp.company }}</p>
                  </div>
                  <div class="exp-meta">
                    <span class="exp-period">{{ exp.period }}</span>
                    <span class="exp-location">{{ exp.location }}</span>
                  </div>
                </div>
                <ul class="exp-highlights">
                  @for (h of exp.highlights; track h) {
                    <li>{{ h }}</li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      }
    </app-section-wrapper>
  `,
  styles: [`
    .timeline {
      max-width: 800px;
      margin: 0 auto;
    }
    .timeline-item {
      display: flex;
      gap: 2rem;
    }
    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }
    .marker-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 4px var(--accent-bg);
      flex-shrink: 0;
      margin-top: 0.4rem;
    }
    .marker-line {
      width: 2px;
      flex: 1;
      background: linear-gradient(to bottom, var(--accent), transparent);
      margin-top: 0.5rem;
      min-height: 2rem;
    }
    .timeline-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.75rem;
      margin-bottom: 2rem;
      flex: 1;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .timeline-card:hover {
      border-color: var(--accent);
      box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }
    .exp-role {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.25rem;
    }
    .exp-company {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--accent);
      margin: 0;
    }
    .exp-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
    }
    .exp-period {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--text-muted);
      white-space: nowrap;
    }
    .exp-location {
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .exp-highlights {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    .exp-highlights li {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.65;
      padding-left: 1.25rem;
      position: relative;
    }
    .exp-highlights li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 0.7rem;
      top: 0.1rem;
    }
    @media (max-width: 640px) {
      .exp-meta { align-items: flex-start; }
    }
  `]
})
export class ExperienceComponent {
  svc = inject(PortfolioService);
}
