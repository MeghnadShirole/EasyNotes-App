import pkg from 'mongoose';
const { Schema, model } = pkg;

const noteSchema = new Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

export default model('Note', noteSchema);