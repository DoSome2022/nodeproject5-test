import mongoose from "mongoose";

//Page Schema
const UserSchema = mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String
},
username:{
    type:String,
    required: true
},
password:{
    type:String,
    
},
admin: {
    type: Number
}
},{timestamps:true})

const User = mongoose.model('User',UserSchema);

export default User