const mongoose = require("mongoose");
const MongoDBServer = process.env.DATABASE_URL;
async function connectDB() {
  try {
    await mongoose.connect(MongoDBServer, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
}

module.exports = connectDB;
