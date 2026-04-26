// src/app/services/portfolio.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio, Skill } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private _data = signal<Portfolio | null>(null);
  private _loading = signal(true);
  private _error = signal<string | null>(null);
  private _activeFilter = signal<string>('All');
  private _darkMode = signal<boolean>(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false
  );

  readonly data = this._data.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly darkMode = this._darkMode.asReadonly();
  readonly activeFilter = this._activeFilter.asReadonly();

  readonly filteredProjects = computed(() => {
    const d = this._data();
    const filter = this._activeFilter();
    if (!d) return [];
    if (filter === 'All') return d.projects;
    return d.projects.filter(p => p.tech.includes(filter));
  });

  readonly techFilters = computed(() => {
    const d = this._data();
    if (!d) return ['All'];
    const techs = new Set<string>();
    d.projects.forEach(p => p.tech.forEach(t => techs.add(t)));
    return ['All', ...Array.from(techs).sort()];
  });

  readonly skillCategories = computed(() => {
    const d = this._data();
    if (!d) return {};
    return d.skills.reduce((acc, s) => {
      if (!acc[s.category]) acc[s.category] = [];
      acc[s.category].push(s);
      return acc;
    }, {} as Record<string, Skill[]>);
  });

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this._loading.set(true);
    this.http.get<Portfolio>('/resume.json').subscribe({
      next: data => {
        this._data.set(data);
        this._loading.set(false);
      },
      error: () => {
        this._error.set('Failed to load portfolio data.');
        this._loading.set(false);
      }
    });
  }

  toggleDarkMode() {
    this._darkMode.update(v => !v);
  }

  setFilter(filter: string) {
    this._activeFilter.set(filter);
  }
}
