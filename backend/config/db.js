const mongoose = require("mongoose");
const MongoDBServer = "mongodb+srv://admin:admin@web.wuwa480.mongodb.net/WebProjectretryWrites=true&w=majority";
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
