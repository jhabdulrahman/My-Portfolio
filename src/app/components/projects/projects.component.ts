// src/app/components/projects/projects.component.ts
import { Component, inject } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { LoadingPlaceholderComponent } from '../loading-placeholder/loading-placeholder.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionWrapperComponent, ProjectCardComponent, LoadingPlaceholderComponent],
  template: `
    <app-section-wrapper sectionId="projects" label="Portfolio" title="Featured Projects">
      <div class="filter-bar">
        @for (filter of svc.techFilters(); track filter) {
          <button
            class="filter-btn"
            [class.active]="svc.activeFilter() === filter"
            (click)="svc.setFilter(filter)"
          >
            {{ filter }}
          </button>
        }
      </div>
      @defer (on viewport) {
      <div class="projects-grid">
        @for (project of svc.filteredProjects(); track project.name) {
          <app-project-card [project]="project" />
        }
        @empty {
          <div class="no-results">No projects match this filter.</div>
        }
      </div>

    } @placeholder {
      <!-- Lightweight skeleton (before user scrolls) -->
      <div class="projects-grid">
        @for (item of [1,2,3]; track item) {
          <div class="h-40 rounded bg-gray-200 animate-pulse"></div>
        }
      </div>

    } @loading {
      <!-- Slightly richer loader (after trigger fires) -->
      <app-loading-placeholder [items]="[1,2,3]" />
}
    </app-section-wrapper>
  `,
  styles: [`
    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
      margin-bottom: 2.5rem;
    }
    .filter-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      padding: 0.4rem 1rem;
      border-radius: 100px;
      border: 1px solid var(--border);
      background: var(--bg-card);
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    .filter-btn.active {
      background: var(--accent);
      border-color: var(--accent);
      color: #fff;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .no-results {
      grid-column: 1 / -1;
      text-align: center;
      color: var(--text-muted);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
      padding: 3rem;
    }
  `]
})
export class ProjectsComponent {
  svc = inject(PortfolioService);
}
