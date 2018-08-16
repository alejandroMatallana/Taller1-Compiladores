import { Trepar } from './Trepar';
export class Animal {
	protected _edadAni: string;
	protected _razaAni: string;
	protected _trepar: Trepar;

	constructor(edad: string, raza: string, trepar: Trepar) {
		this._edadAni = edad;
		this._razaAni = raza;
		this._trepar = trepar;
	}

	get edadAni(): string {
		return this._edadAni;
	}
	set edadAni(value: string) {
		this._edadAni = value;
	}

	get razaAni(): string {
		return this._razaAni;
	}

	set razaAni(value: string) {
		this._razaAni = value;
	}

	get trepa(): Trepar {
		return this._trepar;
	}
}
