import { NoTrepa } from './NoTrepa';
import { Trepar } from './Trepar';
import { Mamifero } from './Mamifero';
import { Animal } from './Animal';

export function concatenar(ladrido: string): string {
	return ladrido + '';
}

export function funcionLadrar(nombreLadrido: string): string {
	return nombreLadrido;
}

export const DERECHA = 'Me movi hacia la derecha';
export const IZQUIERDA = 'Me movi hacia la izquierda';

export enum Movimiento {
	derecha,
	izquierda,
	neutro
}

export class Perro extends Animal implements Mamifero {
	pelo: string;

	private _edad: string;
	private _nombre: string;
	private _raza: string;
	private _ladrar: string;

	constructor(nombre: string, edadAni: string, razaAni: string) {
		super(edadAni, razaAni, new NoTrepa());
		this._nombre = nombre;
	}

	crecerPelo(): string {
		return 'Tengo mucho pelo y largo';
	}

	ladrar(): string {
		return 'Waoof';
	}

	/**
	 * Metodo que recibe un numero
	 * @param numero, el numero que determina que hacer
	 */
	moverse(numero: number) {
		switch (numero) {
			case 1:
				return DERECHA;

			case 2:
				return IZQUIERDA;
			default:
				return 'Ninguna de las anteriores';
		}
	}

	cambiar(movimiento: Movimiento) {
		switch (movimiento) {
			case Movimiento.derecha:
				return 'se movio a la derecha';

			case Movimiento.izquierda:
				return 'se movio a la derecha';

			case Movimiento.neutro:
				return 'esta estatico';
			default:
				return 'Ninguna de las anteriores';
		}
	}

	get edad(): string {
		return this._edad;
	}

	set edad(value: string) {
		this._edad = value;
	}

	get nombre(): string {
		return this._nombre;
	}

	set nombre(value: string) {
		this._nombre = value;
	}

	get raza(): string {
		return this._raza;
	}

	set raza(value: string) {
		this._raza = value;
	}

	get sonido(): string {
		return this._ladrar;
	}

	set sonido(value: string) {
		this._ladrar = value;
	}
}
