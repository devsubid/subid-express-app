import { connectToDatabase, disconnectFromDatabase } from '@/data/db';
import { Story } from '@/models/example.model';

const migrate = async () => {
  try {
    await connectToDatabase();
    const examples = await Story.find();
    console.log('Examples found:', examples.length);
  } catch (error) {
    console.error('Error connecting to database', error);
  } finally {
    await disconnectFromDatabase();
  }
};

migrate();
