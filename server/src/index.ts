import express, { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const supabase = createClient(
    process.env.PROJECT_URL as string,
    process.env.API_KEY as string
);

const BUCKET_NAME = process.env.BUCKET_NAME as string;

app.use(cors());
app.use(express.json());

const fetchRandomImage = async (req: Request, res: Response): Promise<void> => {
  console.log('fetchRandomImage');
  try {
    const { data } = await supabase
      .storage
      .from(BUCKET_NAME)
      .getPublicUrl('images/alvan-nee-eoqnr8ikwFE-unsplash.jpg')

    res.status(200).json({ imageUrl: data.publicUrl });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Failed to fetch image.' });
  }
};

app.get('/api/puppy', fetchRandomImage);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
