import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CharacterListServiceService {

	basechar_url: string = 'https://rickandmortyapi.com/api/character/';
	apiUrl: string = 'http://localhost:3000/characters';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

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

	// List all characters in the database
	listAllCharacters(): Observable<any> {
		return this.http.get(this.apiUrl).pipe(catchError(this.handleError));
	}

	// Get the info of a single character
	getCharacter(id: any): Observable<any> {
		return this.http.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
	}

	createCharacter(data: any): Observable<any> {
		return this.http.post(this.apiUrl, data).pipe(
			catchError(this.handleError)
		);
	}

	// Edit / Update
	updateCharacter(id: any, data: any): Observable<any> {
		return this.http.put(`${this.apiUrl}/${id}`, data).pipe(
			catchError(this.handleError)
		);
	}

	// Delete
	deleteCharacter(id: any): Observable<any> {
		return this.http.delete(`${this.apiUrl}/${id}`).pipe(
			catchError(this.handleError)
		);
	}


	// Handle API errors
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		return throwError(
			'Something bad happened; please try again later.');
	};
}
