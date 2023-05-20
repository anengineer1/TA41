import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './mainview/about/about.component';
import { CharactersComponent } from './mainview/characters/characters.component';
import { HomeComponent } from './mainview/home/home.component';
import { InsertnewcharacterComponent } from './mainview/insertnewcharacter/insertnewcharacter.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'characters',
		component: CharactersComponent
	},
    	{
		path: 'insertcharacters',
		component: InsertnewcharacterComponent
	},

	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'home',
		component: HomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
