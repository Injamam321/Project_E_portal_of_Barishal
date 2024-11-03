const ORIGIN = '*'
const PORT = 5000

// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
// const MONGO_URI = 'mongodb://localhost:27017/barisalProjectDB'

const MONGO_URI = 'mongodb+srv://root:root1234@barisalcloud.xeglnva.mongodb.net/'
const MONGO_OPTIONS = {}

const JWT_SECRET = 'unsafe_secret'

// const ORIGIN = '*'
// const PORT = process.env.PORT || 5000

// // for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/barisalProject'
// const MONGO_OPTIONS = {}

// const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret'

module.exports = {
    ORIGIN,
    PORT,
    MONGO_URI,
    MONGO_OPTIONS,
    JWT_SECRET,
}
