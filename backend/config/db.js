const mongoose = require("mongoose");
const MongoDBServer = "mongodb://127.0.0.1:27017/local";
async function connectDB() {
  try {
    await mongoose.connect(MongoDBServer, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}

module.exports = connectDB;
