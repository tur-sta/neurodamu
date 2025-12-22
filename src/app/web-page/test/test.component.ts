import { Component } from '@angular/core';
import { NgOptimizedImage, NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

type ScaleType = 'score' | 'framingham';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgIf, NgClass],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  menuOpen = false;

  activeScale: ScaleType = 'score';

  scoreResult = '';
  framinghamResult = '';

  setActiveScale(scale: ScaleType) {
    this.activeScale = scale;
  }

  calculateScore() {
    this.scoreResult = 'Риск по шкале СКОР будет рассчитан позже';
  }

  calculateFramingham() {
    this.framinghamResult = 'Риск по Фрамингемской шкале будет рассчитан позже';
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.menuOpen = false;
  }
}
