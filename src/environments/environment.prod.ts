export const environment = {
	production: true,
	firebase: {
		apiKey: 'AIzaSyAkgLyl4GXcHXe1Y7NhjPpntXVQ0fCsOuc',
		authDomain: 'ng-awesome-list.firebaseapp.com',
		databaseURL: 'https://ng-awesome-list.firebaseio.com',
		projectId: 'ng-awesome-list',
		storageBucket: 'ng-awesome-list.appspot.com',
		messagingSenderId: '1039499474549',
		auth: {
			baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
		},
		firestore: {
			baseURL : 'https://firestore.googleapis.com/v1/projects/ng-awesome-list/databases/(default)/documents'
		}
	}
};
