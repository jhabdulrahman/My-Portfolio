// src/app/components/project-card/project-card.component.ts
import { Component, input } from '@angular/core';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="project-card">
      <div class="card-top">
        <div class="domain-badge">{{ project().domain }}</div>
        <span class="duration">{{ project().duration }}</span>
      </div>
      <h3 class="project-name">{{ project().name }}</h3>
      <p class="project-desc">{{ project().description }}</p>
      <ul class="project-highlights">
        @for (h of project().highlights; track h) {
          <li>{{ h }}</li>
        }
      </ul>
      <div class="tech-stack">
        @for (t of project().tech; track t) {
          <span class="tech-tag">{{ t }}</span>
        }
      </div>
      @if (project().link) {
        <a [href]="project().link" target="_blank" class="project-link">
          View Project ↗
        </a>
      }
    </div>
  `,
  styles: [`
    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      height: 100%;
    }
    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      border-color: var(--accent);
    }
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .domain-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
      background: var(--accent-bg);
      padding: 0.25rem 0.75rem;
      border-radius: 100px;
    }
    .duration {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: var(--text-muted);
    }
    .project-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }
    .project-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin: 0;
    }
    .project-highlights {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .project-highlights li {
      font-size: 0.8rem;
      color: var(--text-secondary);
      padding-left: 1rem;
      position: relative;
    }
    .project-highlights li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent);
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: auto;
    }
    .tech-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      padding: 0.2rem 0.6rem;
      background: var(--bg-card-hover);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--text-secondary);
    }
    .project-link {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent);
      text-decoration: none;
      letter-spacing: 0.05em;
      transition: letter-spacing 0.2s;
    }
    .project-link:hover { letter-spacing: 0.1em; }
  `]
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
