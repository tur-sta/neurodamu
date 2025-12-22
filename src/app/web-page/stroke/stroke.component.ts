import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stroke-page',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgIf],
  templateUrl: './stroke.component.html',
  styleUrls: ['./stroke.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StrokeComponent {
  menuOpen = false;

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.menuOpen = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.menuOpen = false;
  }
}

