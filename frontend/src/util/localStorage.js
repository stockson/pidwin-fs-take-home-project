import { jwtDecode } from "jwt-decode";

const ROOT_NAME = "userData"
const defaultData = {
	profile: null,
	game: null,
}

export const getLocalData = () => {
	const local = sanitizeItem(ROOT_NAME)
	return local || defaultData
}

// switch to keyof in TS
export const setLocalData = (key, val) => {
	const localData = getLocalData()
	localData[key] = val
	const dataStr = JSON.stringify(localData)
	localStorage.setItem(ROOT_NAME, dataStr)
}

export const setToken = ( token ) => {
	const decode = jwtDecode( token )
	const json = JSON.stringify({ token, decode })
	localStorage.setItem("token", json)
}
export const getToken = () => {
	return sanitizeItem("token")
}


function sanitizeItem(key) {
	let item = localStorage.getItem(key)

	if (item === null || item === "null") return null
	else if (item === undefined || item === "undefined") return undefined
	else return JSON.parse(item)
}