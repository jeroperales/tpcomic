import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterDetailComponent, CharacterCardComponent, CharacterFormComponent, CharacterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionPersonajesComics';
}
