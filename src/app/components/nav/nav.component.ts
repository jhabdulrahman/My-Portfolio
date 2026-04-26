// src/app/components/nav/nav.component.ts
import { Component, inject, signal, HostListener } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `
    <nav [class.scrolled]="scrolled()" [class.dark]="svc.darkMode()">
      <div class="nav-inner">
        <a href="#hero" class="nav-logo">
          <span class="logo-bracket">&lt;</span>AR<span class="logo-bracket">/&gt;</span>
        </a>
        <ul class="nav-links">
          @for (link of links; track link.id) {
            <li><a [href]="'#' + link.id">{{ link.label }}</a></li>
          }
        </ul>
        <button class="theme-toggle" (click)="svc.toggleDarkMode()" [title]="svc.darkMode() ? 'Light mode' : 'Dark mode'">
          @if (svc.darkMode()) { ☀️ } @else { 🌙 }
        </button>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 1.25rem 1.5rem;
      transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
    }
    nav.scrolled {
      background: var(--bg-nav);
      box-shadow: 0 1px 0 var(--border);
      padding: 0.875rem 1.5rem;
      backdrop-filter: blur(12px);
    }
    .nav-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-primary);
      text-decoration: none;
      letter-spacing: -0.02em;
    }
    .logo-bracket { color: var(--accent); }
    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--accent); }
    .theme-toggle {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.3rem 0.6rem;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.2s;
    }
    .theme-toggle:hover { background: var(--bg-card-hover); }
    @media (max-width: 640px) {
      .nav-links { display: none; }
    }
  `]
})
export class NavComponent {
  svc = inject(PortfolioService);
  scrolled = signal(false);

  links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }
}
