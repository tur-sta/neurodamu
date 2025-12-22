import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, RouterLink],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HelpComponent {
  menuOpen = false;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

