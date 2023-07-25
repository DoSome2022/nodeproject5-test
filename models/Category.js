import mongoose from "mongoose";

//Category Schema
const CategorySchema = mongoose.Schema({
title:{
    type:String,
    required:true
},
slug:{
    type:String
},

},{timestamps:true})

const Category = mongoose.model('Category',CategorySchema);

export default Category