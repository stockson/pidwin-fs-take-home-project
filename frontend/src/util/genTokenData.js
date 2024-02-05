import { jwtDecode } from "jwt-decode";


export default function genTokenData( token ) {
	const decoded = jwtDecode( token )
	return { encoded: token, decoded }
}