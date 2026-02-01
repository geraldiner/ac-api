import type { Song } from '@customTypes/metadata';
import type { Schema } from 'mongoose';
import mongoose from 'mongoose';

const SongSchema: Schema = new mongoose.Schema<Song>({
  key: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  audioBlobUriPath: { type: String, required: true },
  coverImageBlobUriPath: { type: String, required: true },
  tags: { type: [String], default: [] },
  mood: { type: [String], default: [] },
});

const SongModel =
  mongoose.models.Song || mongoose.model<Song>('Song', SongSchema);

export default SongModel;
