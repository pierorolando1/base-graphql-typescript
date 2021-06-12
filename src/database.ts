import { connect } from 'mongoose'

export const startMongoDb = async () => {
    connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Database ready"))
        .catch(error => console.error(error))
}
