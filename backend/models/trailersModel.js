const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const trailersSchema = new Schema(
    { 
      Titulo: {
        type: String,
        required: true,
      },
      año: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^\d{4}$/.test(v); // Valida que tenga exactamente 4 dígitos
          },
          message: props => `${props.value} no es un año válido.`
        }
      },
      Director: {
        type: String,
        required: true,
      },
      Actores: {
        type: String,
        required: true,
      },
      Genero: {
        type: String,
        required: true,
      },
      Reseña: {
        type: String,
        required: true,
      },
      ImagenDePortada: {
        type: String,
        required: true,
      },
      linkDelTrailer: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
);

 const Trailer = mongoose.model("Trailers", trailersSchema);
 module.exports = Trailer;