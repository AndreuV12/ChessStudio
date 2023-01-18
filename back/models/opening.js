import mongoose from 'mongoose'

const opening_schema = new mongoose.Schema({
    name: String,

    shown_pos: Object,

    data: {
        config: Object,
        cont: Object
    },
    
    email: String
})

const Opening = mongoose.model('openings', opening_schema)

export default Opening