const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    imagen:{
        type: String
    },
    rol:{
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google:{
        type: Boolean,
        unique: false
    }
});


UsuarioSchema.method('toJSON', function () {
   const{ __v, _id, ...object} = this.toObject();

   object.uid = _id;
   return object;
})

module.exports = model('Usuario', UsuarioSchema);
