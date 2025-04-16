import {Component, HostListener, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LinkModel} from './models/link.model';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgClass, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    FaIconComponent,
    NgIf,
    NgStyle
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // Fontawesome Icons
  faCookieBite = faCookieBite;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  bgColor: string = 'rgba(0, 0, 0, 0.2)';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0;
    const clientHeight = document.documentElement.clientHeight;

    const factor = Math.min(scrollPosition / (clientHeight - (clientHeight * 15 / 100)), 1);

    const initial = { r: 0, g: 0, b: 0, a: 0.2 };
    const final = { r: 139, g: 86, b: 55, a: 1 };

    const r = Math.round(initial.r + (final.r - initial.r) * factor);
    const g = Math.round(initial.g + (final.g - initial.g) * factor);
    const b = Math.round(initial.b + (final.b - initial.b) * factor);
    const a = Number((initial.a + (final.a - initial.a) * factor).toFixed(2));

    this.bgColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  links = input.required<LinkModel[]>();
}
