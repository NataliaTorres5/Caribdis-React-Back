const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({ //se define el schema con todas las propiedades que requeire el elemento

    name: {
        type: String,
        required: true,
        max: 40,
        min: 4,
    },
    lastName: {
        type: String,
        required: true,
        max: 40,
        min: 4,
    },
    
    mail: { 
        type: String,
         required: true 
    },
    password: [{
        type: String,
        required: true,
        max: 100,
        min: 3
    }],



})

const user = mongoose.model(
    'users',
     userSchema
)

module.exports = user
