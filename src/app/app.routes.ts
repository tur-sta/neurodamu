import { Routes } from '@angular/router';
import { MainPageComponent } from './web-page/main-page/main-page.component';
import { StrokeComponent } from './web-page/stroke/stroke.component';
import {TestComponent} from './web-page/test/test.component';
import {HelpComponent} from './web-page/help/help.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'stroke', component: StrokeComponent },
  { path: 'test', component: TestComponent },
  { path: 'help', component: HelpComponent },
];
