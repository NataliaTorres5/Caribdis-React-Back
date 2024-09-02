const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4,
        max: 100
    },
    description: {
        type: String,
        required: true,
        min: 4,
        max: 3000
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true,
        min: 4,
        max: 40
    },
 
    photo: {
        type: String,
        required: true,
        validate: function (value) {
            if (!value.startsWith('http')) {
                throw new Error('The URL must start with http')
            }
        }
    }
})

const Blog = mongoose.model(
    'blogs',
    blogSchema
)

module.exports = Publication