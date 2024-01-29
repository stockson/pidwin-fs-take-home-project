
// for dev onboarding when .env isn't in source control
export default function() {
	const { PORT, MONGODB_URL, JWT_SECRET } = process.env;

	if (!PORT)
		throw new Error("PORT is not defined in .env file, example: PORT=5000")

	if (!MONGODB_URL)
		throw new Error("MONGODB_URL is not defined in .env file, example: MONGODB_URLmongodb://localhost:27017")

	if (!JWT_SECRET)
		throw new Error(`JWT_SECRET is not defined in .env file, example: JWT_SECRET="test"`)
}
