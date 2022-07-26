import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    songUrl:{
        type:String,
        required:true
    },
    album:{
        type:String,
    },
    artist:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }

}, { timestamps: true });

export default mongoose.model("songs", songSchema);
