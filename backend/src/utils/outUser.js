

const outUser = (user) => {
	return {
		name: user.name,
		email: user.email,
		tokens: user.tokens,
		history: user.history,
	}
}

export default outUser;