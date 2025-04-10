import {Component, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LinkModel} from './models/link.model';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    FaIconComponent,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  faCookieBite = faCookieBite;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  links = input.required<LinkModel[]>();
}
