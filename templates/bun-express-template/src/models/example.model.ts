import { Schema, model, models, Document, Model } from 'mongoose';

type User = {
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export type IUser = Document & User;

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User: Model<IUser> = models.User || model<IUser>('User', UserSchema);