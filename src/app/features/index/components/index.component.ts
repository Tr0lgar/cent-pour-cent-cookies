import { Component } from '@angular/core';
import {Carousel, CarouselModule} from 'primeng/carousel';
import {HomeHeroComponent} from './home-hero/home-hero.component';
import {ProductsDisplayComponent} from './products-display/products-display.component';
import {BoxesComponent} from './boxes/boxes.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {FeaturesComponent} from './features/features.component';

@Component({
  selector: 'app-index',
  imports: [
    HomeHeroComponent,
    ProductsDisplayComponent,
    BoxesComponent,
    AboutUsComponent,
    FeaturesComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
