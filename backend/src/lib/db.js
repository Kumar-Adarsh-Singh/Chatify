import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const {MONGO_URI} = process.env;
    if (!MONGO_URI) 
      throw new Error('MONGO_URI not set');
    const conn = await mongoose.connect(MONGO_URI);
    console.log('MONGODB CONNECTED. HOST: ', conn.connection.host);
  } catch (error) {
    console.log('Error connecting MONGODB: ', error);
    process.exit(1); // 1 = fail, 0 = success
  }
}