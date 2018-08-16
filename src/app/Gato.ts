import { Trepa } from './Trepa';
import { Mamifero } from './Mamifero';
import { Animal } from './Animal';
export function concatenarSonido(maullido: string): string {
	return maullido;
}

export class Gato extends Animal implements Mamifero {
	pelo: string;

	private _edadG: string;
	private _nombreG: string;
	private _razaG: string;
	private _maullar: string;

	constructor(nombre: string, edadAni: string, razaAni: string) {
		super(edadAni, razaAni, new Trepa());
		this._nombreG = nombre;
	}

	crecerPelo(): string {
		return 'Tengo poco pelo liso';
	}

	maullar(): string {
		return 'Meow!';
	}

	get edad(): string {
		return this._edadG;
	}

	set edad(value: string) {
		this._edadG = value;
	}

	get nombre(): string {
		return this._nombreG;
	}

	set nombre(value: string) {
		this._nombreG = value;
	}

	get raza(): string {
		return this._razaG;
	}

	set raza(value: string) {
		this._razaG = value;
	}

	get sonido(): string {
		return this._maullar;
	}

	set sonido(value: string) {
		this._maullar = value;
	}
}
