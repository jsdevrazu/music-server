import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
}, { timestamps: true})

export default mongoose.model('album', albumSchema);