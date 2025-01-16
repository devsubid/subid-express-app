import mongoose from 'mongoose';
import { config } from '../config';

let cachedConnection: mongoose.Connection | null = null;

export const connectToDatabase = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const connection = await mongoose.connect(config.databaseUrl, {
      serverSelectionTimeoutMS: 45000,
      socketTimeoutMS: 45000,
    });

    cachedConnection = connection.connection;
    console.log('Connected to MongoDB');
    return cachedConnection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export const disconnectFromDatabase = async () => {
  if (!cachedConnection) {
    return;
  }

  try {
    await cachedConnection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    throw new Error('Failed to disconnect from MongoDB');
  }
};
