import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './shared/components/layout/nav-bar/nav-bar.component';
import {LinkModel} from './shared/components/layout/nav-bar/models/link.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cent-pour-cent-cookies';

  homeLinks: LinkModel[] = [
    {
      url : "/",
      name : "Home",
    },
    {
      url : "/produits",
      name : "Produits",
    },
    {
      url : "/carte",
      name : "Carte",
    },
    {
      url : "/commander",
      name : "Commander",
    },
    {
      url : "/about",
      name : "About",
    },
    {
      url :"/contact",
      name : "Contact",
    },
    {
      url : "/faq",
      name : "FAQ",
    }
  ]
}
