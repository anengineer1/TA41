import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { CharactersComponent } from './mainview/characters/characters.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './mainview/about/about.component';
import { HomeComponent } from './mainview/home/home.component'

@NgModule({
	declarations: [
		AppComponent,
		MainviewComponent,
		CharactersComponent,
  AboutComponent,
  HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
