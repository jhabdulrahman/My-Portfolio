// src/app/components/contact/contact.component.ts
import { Component, inject, signal } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionWrapperComponent],
  template: `
    <app-section-wrapper sectionId="contact" label="Say Hello" title="Get In Touch">
      <div class="contact-layout">
        <div class="contact-intro">
          <p class="intro-text">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question, a project idea, or just want to connect — my inbox is always open!
          </p>
          @if (svc.data(); as d) {
            <div class="contact-links">
              <a [href]="'mailto:' + d.email" class="clink">
                <div class="clink-icon">✉</div>
                <div>
                  <p class="clink-label">Email</p>
                  <p class="clink-val">{{ d.email }}</p>
                </div>
              </a>
              <a [href]="d.linkedin" target="_blank" class="clink">
                <div class="clink-icon">in</div>
                <div>
                  <p class="clink-label">LinkedIn</p>
                  <p class="clink-val">jhabdulrahman</p>
                </div>
              </a>
              <div class="clink">
                <div class="clink-icon">📱</div>
                <div>
                  <p class="clink-label">Phone</p>
                  <p class="clink-val">{{ d.phone }}</p>
                </div>
              </div>
            </div>
          }
        </div>

        <form class="contact-form" (submit)="handleSubmit($event)">
          @if (submitted()) {
            <div class="success-msg">
              <span>✓</span> Message sent! I'll get back to you soon.
            </div>
          } @else {
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input id="subject" type="text" placeholder="What's this about?" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" class="submit-btn">
              Send Message ↗
            </button>
          }
        </form>
      </div>
    </app-section-wrapper>
  `,
  styles: [`
    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 4rem;
      align-items: start;
      max-width: 980px;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      .contact-layout { grid-template-columns: 1fr; gap: 2.5rem; }
    }
    .intro-text {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.8;
      margin: 0 0 2rem;
    }
    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .clink {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      text-decoration: none;
      transition: border-color 0.2s;
    }
    .clink:hover { border-color: var(--accent); }
    .clink-icon {
      width: 36px; height: 36px;
      border-radius: 8px;
      background: var(--accent-bg);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .clink-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin: 0 0 0.1rem;
    }
    .clink-val {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }
    .contact-form {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    @media (max-width: 500px) {
      .form-row { grid-template-columns: 1fr; }
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
    }
    input, textarea {
      background: var(--bg-body);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.7rem 1rem;
      font-size: 0.875rem;
      color: var(--text-primary);
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      resize: vertical;
    }
    input:focus, textarea:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-bg);
    }
    input::placeholder, textarea::placeholder { color: var(--text-muted); }
    .submit-btn {
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 0.85rem 1.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
      letter-spacing: 0.03em;
    }
    .submit-btn:hover { opacity: 0.9; transform: translateY(-1px); }
    .success-msg {
      text-align: center;
      padding: 3rem 1rem;
      color: #22c55e;
      font-size: 1rem;
      font-weight: 600;
    }
    .success-msg span { margin-right: 0.5rem; }
  `]
})
export class ContactComponent {
  svc = inject(PortfolioService);
  submitted = signal(false);

  handleSubmit(e: Event) {
    e.preventDefault();
    this.submitted.set(true);
  }
}
