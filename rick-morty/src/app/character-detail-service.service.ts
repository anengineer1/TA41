import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CharacterDetailServiceService {

	base_chardetail_url: string = 'https://rickandmortyapi.com/api/character/';

	constructor(private http: HttpClient) {}

	returndetails(char_code: string) {
	    let char_detail_url: string = this.base_chardetail_url;
	    char_detail_url += char_code;

	    return this.http.get(char_detail_url);
	}
}
