const { getPath, MEMBERS } = require('../paths.js');

class Member {
	constructor(bandRef, user, member, bandName) {
		this.ref = bandRef.collection(MEMBERS).doc();
		this.data = {
			id: this.ref.id,
			path: getPath(this.ref),
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			role: member.role,
			bandId: bandRef.id,
			bandName,
			bandPath: getPath(bandRef),
		};
	}
}

module.exports = { Member };