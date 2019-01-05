export class User {
	readonly id: string; // id de l’utilisateur
	email: string; // email de l’utilisateur
	isNewUser: boolean; // première connexion de l’utilisateur ou non
	lastLoginDate: number; // date de la dernière connexion
	name: string; // nom de l’utilisateur
	avatar: string; // url vers la photo de profil de l’utilisateur
	pomodoroDuration: number; // durée des pomodoros
	registrationDate: number; // date d’inscription
	roles: Array<'USER' | 'EMPLOYEE'>; // rôles attribués à l’utilisateur

	constructor(options: {
		id?: string,
		email?: string,
		isNewUser?: boolean,
		lastLoginDate?: number,
		name?: string,
		avatar?: string,
		pomodoroDuration?: number,
		registrationDate?: number,
		roles?: Array<'USER' | 'EMPLOYEE'>
	} = {}) {
		this.id = options.id || '';
		this.email = options.email || '';
		this.isNewUser = options.isNewUser || true;
		this.lastLoginDate = options.lastLoginDate || 0;
		this.name = options.name || '';
		this.avatar = options.avatar || '';
		this.pomodoroDuration = options.pomodoroDuration || 1500;
		this.registrationDate = options.registrationDate || 0;
		this.roles = options.roles || this.email.endsWith('google.com') ? ['USER', 'EMPLOYEE'] : ['USER'];
	}
}
