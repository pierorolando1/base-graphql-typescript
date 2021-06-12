import "reflect-metadata"
import { startServer } from './app'
import { startMongoDb } from "./database"

const main = async () => {
    startMongoDb()
    const app = await startServer()
    app.listen(3000)
    console.log("Server on port 3000")
    console.log("Graphql server on http://localhost:3000/graphql")
}

main()