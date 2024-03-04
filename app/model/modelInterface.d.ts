import  { Document } from 'mongoose';
export interface Demo extends Document {
    readonly name: string;
    readonly age: number;
    readonly email: string;
} 