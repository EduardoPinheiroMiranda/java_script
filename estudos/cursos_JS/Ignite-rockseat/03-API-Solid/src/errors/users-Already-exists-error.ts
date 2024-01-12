export class UserAlreadyExistsErros extends Error{
	constructor(){
		super("Email existente")
	}
}