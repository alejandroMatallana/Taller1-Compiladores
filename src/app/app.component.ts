import { Trepar } from './Trepar';
import { NoTrepa } from './NoTrepa';
import { Gato } from './Gato';
import { Animal } from './Animal';
import { Perro, Movimiento, funcionLadrar } from './Perro';
import * as PerroImports from './Perro';

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'Taller #1 Matallana y Cardona';

	constructor() {
		console.log(PerroImports.funcionLadrar('Waof, Waof hola profe'));

		const perro = new Perro('Firulays', '15', 'Labrador');
		console.log(perro.nombre + ' ' + perro.edadAni + ' ' + perro.razaAni);
		console.log(perro.ladrar);
		console.log(perro.crecerPelo());
		console.log(perro.trepa.treparArbol);
		console.log(perro.moverse(5));
		console.log(perro.cambiar(Movimiento.derecha));

		const gato = new Gato('Katy', '20', 'gatubelo');
		console.log(gato.nombre + ' ' + gato.edadAni + ' ' + gato.razaAni);
		console.log(gato.maullar);
		console.log(gato.crecerPelo());
		console.log(gato.trepa.treparArbol);
	}
}
