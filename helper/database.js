import mongoose from 'mongoose';

export async function connectDB() {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'task-manager',
        });

        console.log(`MongoDB Connected: ${connection.host}`);
    } catch (error) {
        console.error('Error in connectDB:', error);
    }
}
