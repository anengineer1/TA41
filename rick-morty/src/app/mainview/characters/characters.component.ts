import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

	basechar_url: string = 'https://rickandmortyapi.com/api/character/';
	characters: any = null;

	constructor(private http: HttpClient) {}


	ngOnInit(): void {

		let chars_url: string = this.basechar_url;
		// adds 10 random numbers at the end of the url to later get them
		for (var i = 0; i < 10; i++) {
			let random_number: number = Math.floor(Math.random() * (825 - 0 + 1)) + 0;
			chars_url += random_number.toString();
			if (i < 10) {
				chars_url += ',';
			}

		}


		this.http.get(chars_url).subscribe(
			result => {
				this.characters = result;
			},
			error => {
				console.log('Problem occurred')
			}
		);
	}



}
