// src/app/app.component.ts
import { Component, inject, effect } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <div [class.dark]="svc.darkMode()" class="app-root">
      <app-nav />
      <main>
        <app-hero />
        @defer (on viewport; prefetch on idle) {
          <app-about />
        } @placeholder { <div style="height:400px"></div> }

        @defer (on viewport; prefetch on idle) {
          <app-skills />
        } @placeholder { <div style="height:400px"></div> }

        @defer (on viewport; prefetch on idle) {
          <app-experience />
        } @placeholder { <div style="height:400px"></div> }

        @defer (on viewport; prefetch on idle) {
          <app-projects />
        } @placeholder { <div style="height:400px"></div> }

        @defer (on viewport; prefetch on idle) {
          <app-education />
        } @placeholder { <div style="height:400px"></div> }

        @defer (on viewport; prefetch on idle) {
          <app-contact />
        } @placeholder { <div style="height:400px"></div> }
      </main>
      <footer class="site-footer">
        <p>Designed & Built by <span>Abdul Rahman J H</span> · {{ currentYear }}</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-root {
      min-height: 100vh;
      background: var(--bg-body);
      color: var(--text-primary);
      transition: background 0.3s ease, color 0.3s ease;
    }
    main { display: flex; flex-direction: column; }
    .site-footer {
      text-align: center;
      padding: 2rem 1rem;
      border-top: 1px solid var(--border);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .site-footer span { color: var(--accent); }
  `]
})
export class AppComponent {
  svc = inject(PortfolioService);
  currentYear = new Date().getFullYear();
}
