import { Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component'
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { ExperienceComponent } from './components/about/experience/experience.component'
import { SkillComponent } from './components/about/skill/skill.component'
import { HttpClientModule } from '@angular/common/http'
import { BoxComponent } from './components/home/box/box.component'
import { AnimationsComponent } from './components/animations/animations.component'
import { QuotesComponent } from './components/quotes/quotes.component'
import { MooonComponent } from './components/mooon/mooon.component'
import { OutsideComponent } from './components/outside/outside.component'
import { InthetreesComponent } from './components/inthetrees/inthetrees.component'
import { SunRiverComponent } from './components/sun-river/sun-river.component'
import { CalculatorComponent } from './components/calculator/calculator.component'
import { ResumeComponent } from './components/resume/resume.component'
import { TodolistComponent } from './components/todolist/todolist.component'

export const routes: Routes = [
	{ 
		path: '',
		component: ResumeComponent,
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
		path: 'todolist',
		component: TodolistComponent
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
		path: 'quotes',
		component: QuotesComponent
	},
	{
		path: 'outside',
		component: OutsideComponent
	},
	{
		path: 'inthetrees',
		component: InthetreesComponent
	},
	{
		path: 'mooon',
		component: MooonComponent
	},
	{
		path: 'sun-river',
		component: SunRiverComponent
	},
	{
		path: 'calculator',
		component: CalculatorComponent
	},
	{
		path: 'resume',
		component: ResumeComponent
	},
	{
		path: 'about/skill',
		component: SkillComponent
	}];
