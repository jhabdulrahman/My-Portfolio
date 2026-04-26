// src/app/components/hero/hero.component.ts
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero-bg">
        <div class="grid-lines"></div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
      @if (svc.data(); as d) {
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Available for new opportunities
          </div>
          <h1 class="hero-name">{{ d.name }}</h1>
          <div class="hero-title-wrap">
            <span class="hero-arrow">→</span>
            <span class="hero-title">{{ d.title }}</span>
          </div>
          <p class="hero-tagline">{{ d.tagline }}</p>
          <div class="hero-cta">
            <a href="#projects" class="btn-primary">View Projects</a>
            <a href="#contact" class="btn-ghost">Get In Touch</a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">3.8+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">3</span>
              <span class="stat-label">Major Projects</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">95%</span>
              <span class="stat-label">Test Coverage</span>
            </div>
          </div>
        </div>
      }
      <a href="#about" class="scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </a>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 7rem 1.5rem 4rem;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .grid-lines {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(var(--grid-line) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
      background-size: 60px 60px;
      opacity: 0.4;
    }
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.12;
    }
    .glow-1 {
      width: 500px; height: 500px;
      background: var(--accent);
      top: -100px; left: -100px;
      animation: floatA 8s ease-in-out infinite;
    }
    .glow-2 {
      width: 400px; height: 400px;
      background: var(--accent-alt);
      bottom: -80px; right: -80px;
      animation: floatB 10s ease-in-out infinite;
    }
    @keyframes floatA {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(30px, 30px); }
    }
    @keyframes floatB {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-20px, -20px); }
    }
    .hero-content {
      max-width: 800px;
      text-align: center;
      animation: fadeUp 0.8s ease both;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      color: var(--text-muted);
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 0.4rem 1rem;
      border-radius: 100px;
      margin-bottom: 2rem;
      animation: fadeUp 0.8s 0.1s ease both;
    }
    .badge-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .hero-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.8rem, 7vw, 5.5rem);
      font-weight: 800;
      color: var(--text-primary);
      margin: 0 0 0.5rem;
      line-height: 1.05;
      letter-spacing: -0.03em;
      animation: fadeUp 0.8s 0.2s ease both;
    }
    .hero-title-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
      animation: fadeUp 0.8s 0.3s ease both;
    }
    .hero-arrow {
      font-size: 1.5rem;
      color: var(--accent);
    }
    .hero-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(1rem, 2.5vw, 1.3rem);
      color: var(--accent);
      letter-spacing: 0.05em;
    }
    .hero-tagline {
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      color: var(--text-muted);
      max-width: 580px;
      margin: 0 auto 2.5rem;
      line-height: 1.7;
      animation: fadeUp 0.8s 0.4s ease both;
    }
    .hero-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
      animation: fadeUp 0.8s 0.5s ease both;
    }
    .btn-primary {
      background: var(--accent);
      color: #fff;
      padding: 0.75rem 1.75rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      letter-spacing: 0.03em;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(99,102,241,0.4);
    }
    .btn-ghost {
      background: transparent;
      color: var(--text-primary);
      padding: 0.75rem 1.75rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      border: 1px solid var(--border);
      transition: border-color 0.2s, color 0.2s;
    }
    .btn-ghost:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      animation: fadeUp 0.8s 0.6s ease both;
    }
    .stat { text-align: center; }
    .stat-num {
      display: block;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--text-primary);
    }
    .stat-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
    }
    .stat-divider {
      width: 1px;
      height: 2.5rem;
      background: var(--border);
    }
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-muted);
      text-decoration: none;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      animation: fadeUp 1s 1s ease both;
    }
    .scroll-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, var(--accent), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }
    @keyframes scrollPulse {
      0%, 100% { opacity: 0.4; transform: scaleY(1); }
      50% { opacity: 1; transform: scaleY(1.2); }
    }
  `]
})
export class HeroComponent {
  svc = inject(PortfolioService);
}
