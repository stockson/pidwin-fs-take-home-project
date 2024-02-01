import { jwtDecode } from "jwt-decode";


export const getLocalData = () => {
	const profileStr = localStorage.getItem("profile")
	console.log(profileStr)
	const profile = profileStr ? JSON.parse(profileStr) : null
	console.log(profile)

	const gameStr = localStorage.getItem("game")
	console.log(gameStr)
	const game = gameStr ? JSON.parse(gameStr) : null
	console.log(game)

	return { profile, game }
}

// switch to keyof in TS
export const setLocalData = (key, val) => {
	localStorage.setItem(key, JSON.stringify(val))
}


export const setToken = ( token ) => {
	const decode = jwtDecode( token )
	const json = JSON.stringify({ token, decode })
	localStorage.setItem("token", json)
}
export const getToken = () => {
	const jsonStr = localStorage.getItem("token")
	return jsonStr ? JSON.parse(jsonStr) : null
}