// src/app/components/skills/skills.component.ts
import { Component, inject } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { SkillBarComponent } from '../skill-bar/skill-bar.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionWrapperComponent, SkillBarComponent],
  template: `
    <app-section-wrapper sectionId="skills" label="Expertise" title="Technical Skills">
      @if (svc.data()) {
        <div class="skills-grid">
          @for (entry of categoryEntries(); track entry[0]) {
            <div class="skill-category">
              <h3 class="category-name">
                <span class="cat-dot"></span>
                {{ entry[0] }}
              </h3>
              @for (skill of entry[1]; track skill.name) {
                <app-skill-bar [name]="skill.name" [level]="skill.level" />
              }
            </div>
          }
        </div>
      }
    </app-section-wrapper>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2.5rem;
    }
    .skill-category {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.5rem 1.75rem;
      transition: border-color 0.2s;
    }
    .skill-category:hover { border-color: var(--accent); }
    .category-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-primary);
      margin: 0 0 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .cat-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
    }
  `]
})
export class SkillsComponent {
  svc = inject(PortfolioService);

  categoryEntries() {
    return Object.entries(this.svc.skillCategories());
  }
}
