const axios = require('axios');
const rest = require('./rest.js');
const firebase = require('./firebase.js');
const auth = firebase.auth();

const userInfo = user => {
	const { uid, email, displayName, emailVerified } = user;
	return { uid, email, displayName, emailVerified };
};

const createEmailUser = (userData, res) => {
	const { email, password, displayName } = userData;
	auth
		.createUser({ email, password, displayName })
		.then(newUser => {
			// return created user to frontend and begin email verification
			res.send(userInfo(newUser));
		})
		.catch(err => res.send(err.message));
};

// const getUser = (uid, res) => {
// 	firebase
// 		.auth()
// 		.getUser(uid)
// 		.then(user => {
// 			res.send(userInfo(user));
// 		})
// 		.catch(err => res.send(err.message));
// };

const emailLogin = (emailPassword, res) => {
	axios
		.post(rest.signInWithPassword, { ...emailPassword })
		.then(response => {
			res.send(response.data);
		})
		.catch(err => res.send(err));
};

exports.createEmailUser = createEmailUser;
exports.emailLogin = emailLogin;
