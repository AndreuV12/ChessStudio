import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: './config/.env' })

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const URI = `mongodb+srv://${user}:${password}@cluster0.tdeymhz.mongodb.net/test`

mongoose.set('strictQuery', true)

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {console.log('BD is connected')})