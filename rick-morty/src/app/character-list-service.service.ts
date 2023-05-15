import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CharacterListServiceService {

	basechar_url: string = 'https://rickandmortyapi.com/api/character/';

	constructor(private http: HttpClient) {}

	returndataset() {

		let chars_url: string = this.basechar_url;
		for (var i = 0; i < 10; i++) {
			let random_number: number = Math.floor(Math.random() * (825 - 0 + 1)) + 0;
			chars_url += random_number.toString();
			if (i < 10) {
				chars_url += ',';
			}

		}

		return this.http.get(chars_url);
	}
}
