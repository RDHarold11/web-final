const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^(?=.*\d)[A-Za-z\d]{6,}$/.test(value);
      },
      message:
        "La contraseña debe contener al menos 6 caracteres y al menos un numero.",
    },
  },
});

const User = model("Users", userSchema);

module.exports = User;
