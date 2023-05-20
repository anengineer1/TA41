import { ChangeDetectorRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { CharactersComponent } from './mainview/characters/characters.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './mainview/about/about.component';
import { HomeComponent } from './mainview/home/home.component';
import { InsertnewcharacterComponent } from './mainview/insertnewcharacter/insertnewcharacter.component'
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		MainviewComponent,
		CharactersComponent,
		AboutComponent,
		HomeComponent,
		InsertnewcharacterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
