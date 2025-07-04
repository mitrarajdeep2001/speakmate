import mongoose from "mongoose";

const MAX_RETRIES = 5; // number of times to retry before giving up
const RETRY_DELAY = 5000; // milliseconds (5 seconds)

export const connectDB = async () => {
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return; // exit on success
    } catch (error) {
      retries++;
      console.error(`❌ MongoDB connection failed (attempt ${retries}/${MAX_RETRIES})`);
      console.error(error);

      if (retries >= MAX_RETRIES) {
        console.error("❌ Max retries reached. Exiting.");
        process.exit(1);
      }

      // Wait before next retry
      console.log(`⏳ Retrying in ${RETRY_DELAY / 1000} seconds...`);
      await new Promise(res => setTimeout(res, RETRY_DELAY));
    }
  }
};
