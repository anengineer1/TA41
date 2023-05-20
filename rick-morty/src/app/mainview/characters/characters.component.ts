import { Component, OnInit } from '@angular/core';
import { CharacterListServiceService } from 'src/app/character-list-service.service';
import { CharacterDetailServiceService } from 'src/app/character-detail-service.service';
import { Character } from 'src/app/character';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

	characters: any = null;
	characterDetails: Character = new Character;

	constructor(private charactersListService: CharacterListServiceService,
		private characterDetailService: CharacterDetailServiceService) {}


	ngOnInit(): void {
		// init char
		this.getCharacterDetail('1');

		this.charactersListService.listAllCharacters().subscribe(
			result => {
				this.characters = result;
			},
			error => {
				console.log('Problem occurred')
			}
		);
	}

	getCharacterDetail(char_code: string) {
		this.charactersListService.getCharacter(char_code).subscribe(
			result => {
				this.characterDetails = result;
			},
			error => {
				console.log('Problem occurred')
			}
		)
	}

	updateCertainCharacter() {
		this.charactersListService.updateCharacter(this.characterDetails.id, this.characterDetails).subscribe(
			response => {
				console.log(this.characterDetails);
				console.log(response);
			},
			error => {
				console.log(error);
			})
	}

	deleteCertainCharacter(char_code: string) {
		this.charactersListService.deleteCharacter(char_code).subscribe(
			result => {
				this.ngOnInit();
				this.characterDetails = result;
			},
			error => {
				console.log('Problem occurred')
			}
		)
	}

}
