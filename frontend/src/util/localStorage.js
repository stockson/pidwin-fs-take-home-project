
const ROOT_NAME = "state"
const defaultData = {
	profile: null,
	game: null,
	token: null
}

export const getLocalState = () => {
	const local = sanitizeItem(ROOT_NAME)
	return local || defaultData
}

export const subscribeLocalState = ( store ) => {
	store.subscribe( () => {
		const state = store.getState()
		if (state)
			localStorage.setItem(ROOT_NAME, JSON.stringify(state))
	})
}

function sanitizeItem(key) {
	let item = localStorage.getItem(key)

	if (item === null || item === "null") return null
	else if (item === undefined || item === "undefined") return undefined
	else return JSON.parse(item)
}