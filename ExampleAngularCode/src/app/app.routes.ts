import { Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component'
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { ExperienceComponent } from './components/about/experience/experience.component'
import { SkillComponent } from './components/about/skill/skill.component'
import { HttpClientModule } from '@angular/common/http'
import { BoxComponent } from './components/home/box/box.component'
import { AnimationsComponent } from './components/animations/animations.component'
import { QuotesComponent } from './components/animations/quotes/quotes.component'

export const routes: Routes = [
	{ 
		path: '',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'hello',
		component: HelloComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'about/experience',
		component: ExperienceComponent
	},
	{
		path: 'box',
		component: BoxComponent
	},
	{
		path: 'animations',
		component: AnimationsComponent
	},
	{
		path: 'animations/quotes',
		component: QuotesComponent
	},
	{
		path: 'about/skill',
		component: SkillComponent
	}];
