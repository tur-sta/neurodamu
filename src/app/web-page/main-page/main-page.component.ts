import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgOptimizedImage, NgFor, NgClass, NgIf, SlicePipe} from '@angular/common';

interface Goal {
  id: string;
  title: string;
  description: string;
  imageMain: string;
  extraImages?: string[];
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NgOptimizedImage, NgFor, NgClass, NgIf, RouterLink, SlicePipe],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent {
  menuOpen = false;

  goals: Goal[] = [
    {
      id: 'goal-1',
      title: '',
      description: 'Создание условий для инноваций в борьбе с инсультом.',
      imageMain: 'assets/images/clinic.png',
      extraImages: ['assets/images/clinic-2.png'],
    },
    {
      id: 'goal-2',
      title: '',
      description: 'Повышение осведомлённости о рисках, профилактике и симптомах инсульта.',
      imageMain: 'assets/images/goal-2-main.png',
      extraImages: [
        'assets/images/goal-2-1.png',
        'assets/images/goal-2-2.png',
        'assets/images/goal-2-3.png',
      ],
    },
    {
      id: 'goal-3',
      title: '',
      description: 'Улучшение здравоохранения: проекты по неврологии.',
      imageMain: 'assets/images/goal-3-main.png',
      extraImages: ['assets/images/goal-3-1.png', 'assets/images/goal-3-2.png'],
    },
    {
      id: 'goal-4',
      title: '',
      description:
        'Поддержка медицинских студентов и специалистов для повышения доступности лечения инсульта.',
      imageMain: 'assets/images/goal-4-main.png',
      extraImages: [
        'assets/images/goal-4-1.png',
        'assets/images/goal-4-2.png',
        'assets/images/goal-4-3.png',
      ],
    },
  ];

  activeGoalId = this.goals[0].id;

  setActiveGoal(id: string) {
    this.activeGoalId = id;
  }

  get activeGoal(): Goal {
    return this.goals.find((g) => g.id === this.activeGoalId)!;
  }

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
