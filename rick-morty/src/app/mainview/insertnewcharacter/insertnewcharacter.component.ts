import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { CharacterListServiceService } from 'src/app/character-list-service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-insertnewcharacter',
	templateUrl: './insertnewcharacter.component.html',
	styleUrls: ['./insertnewcharacter.component.css']
})
export class InsertnewcharacterComponent implements OnInit {

	baseImageUrl: string = 'https://rickandmortyapi.com/api/character/avatar/';
	characterDetail: Character = new Character;

	ngOnInit(): void {
	}
	constructor(private charactersListService: CharacterListServiceService,
		private router: Router) {

	}

	insertCharacter() {
		let charImageUrl: string = this.baseImageUrl + this.characterDetail.id + '.jpeg';
		this.characterDetail.image = charImageUrl;
		this.charactersListService.createCharacter(this.characterDetail).subscribe(
			response => {
				this.router.navigate(['/characters']);
				console.log(response);
			},
			error => {
				console.log(error);
			})
	}
}
