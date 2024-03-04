import mongoose, { Schema } from 'mongoose';
import { Demo } from './modelInterface';

const demoSchema= new Schema<Demo>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true }
})

const DemoModel = mongoose.model('Demo', demoSchema);
export default DemoModel;
