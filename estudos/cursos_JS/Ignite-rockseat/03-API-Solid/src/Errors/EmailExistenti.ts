export class EmailExistente extends Error {
	constructor(){
		super("O email já esta em uso")
	}
}