import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterListServiceService } from 'src/app/character-list-service.service';
import { CharacterDetailServiceService } from 'src/app/character-detail-service.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

	characters: any = null;
	characterDetails: any = null;

	constructor(private charactersListService: CharacterListServiceService,
		private characterDetailService: CharacterDetailServiceService) {}


	ngOnInit(): void {
		// init char
		this.getCharacterDetail('1');

		this.charactersListService.returndataset().subscribe(
			result => {
				this.characters = result;
			},
			error => {
				console.log('Problem occurred')
			}
		);
	}

	getCharacterDetail(char_code: string) {
		this.characterDetailService.returndetails(char_code).subscribe(
			result => {
				this.characterDetails = result;
			},
			error => {
				console.log('Problem occurred')
			}
		)
	}

}
