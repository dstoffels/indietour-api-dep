/**
 *
 * @param {import("express").Response} res
 * @param tryBlock
 */
const responseErrorHandler = (res, tryBlock) => {
	try {
		tryBlock();
	} catch (error) {
		console.log(error);
		switch (error.code) {
			case 'auth/id-token-expired':
				res.status(401).send(error.code);
				break;
			default:
				res.status(400).send(error.code);
		}
	}
};

module.exports = responseErrorHandler;
