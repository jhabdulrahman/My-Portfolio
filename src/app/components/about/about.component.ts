// src/app/components/about/about.component.ts
import { Component, inject } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionWrapperComponent],
  template: `
    <app-section-wrapper sectionId="about" label="Who I Am" title="About Me">
      @if (svc.data(); as d) {
        <div class="about-grid">
          <div class="about-text">
            <p class="about-body">{{ d.about }}</p>
            <div class="about-contacts">
              <a [href]="'mailto:' + d.email" class="contact-chip">
                <span>✉</span> {{ d.email }}
              </a>
              <a [href]="d.linkedin" target="_blank" class="contact-chip">
                <span>in</span> LinkedIn
              </a>
              <span class="contact-chip">
                <span>📍</span> {{ d.location }}
              </span>
            </div>
          </div>
          <div class="about-certs">
            <h3 class="certs-title">Certifications</h3>
            <div class="cert-list">
              @for (cert of d.certifications; track cert.name) {
                <div class="cert-item">
                  <div class="cert-icon">✓</div>
                  <div>
                    <p class="cert-name">{{ cert.name }}</p>
                    <p class="cert-issuer">{{ cert.issuer }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </app-section-wrapper>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    @media (max-width: 768px) {
      .about-grid { grid-template-columns: 1fr; gap: 2rem; }
    }
    .about-body {
      font-size: 1rem;
      color: var(--text-secondary);
      line-height: 1.85;
      margin: 0 0 2rem;
    }
    .about-contacts {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .contact-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--text-secondary);
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 0.4rem 0.9rem;
      border-radius: 8px;
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s;
    }
    .contact-chip:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    .contact-chip span {
      font-weight: 700;
      color: var(--accent);
    }
    .certs-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 1.5rem;
    }
    .cert-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .cert-item {
      display: flex;
      align-items: flex-start;
      gap: 0.875rem;
      padding: 1rem 1.25rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      transition: border-color 0.2s;
    }
    .cert-item:hover { border-color: var(--accent); }
    .cert-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      background: var(--accent-bg);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .cert-name {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.15rem;
    }
    .cert-issuer {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: var(--text-muted);
      margin: 0;
    }
  `]
})
export class AboutComponent {
  svc = inject(PortfolioService);
}
