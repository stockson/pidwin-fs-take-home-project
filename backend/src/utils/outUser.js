

const outUser = (user) => {
	return {
		profile: {
			name: user.name,
			email: user.email,
		},
		game: {
			tokens: user.tokens,
			history: user.history,
		}
	}
}

export default outUser;