import mongoose, { ObjectId, Schema, model } from "mongoose";
import Character from "./Character";

export interface UserDocument{
    _id:string,
    email:string,
    password:string,
    username:string,
    characters:ObjectId[],
    party:ObjectId
    isVerified:boolean,
    isAdmin: boolean,
    forgotPassToken:string,
    forgotPassTokenExpiration:Date,
    verifyToken:string,
    verifyTokenExpiration:Date
    createdAt: Date,
    updatedAt: Date,
}

const UserSchema = new mongoose.Schema<UserDocument>({
    email:{
        type:String,
        unique:true,
        required:[ true, "Please provide a username" ],
    },
    password:{
        type:String,
        required:[true, "Please provide a password."]
    },
    username:{
        type:String,
        required:[true, "What's your identifying handle?"]
    },
    characters:{
        type:[],
        of:Schema.Types.ObjectId,
        ref: "Character",
        refPath:"./Character"
    },
    party: {
        type: Schema.Types.ObjectId
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPassToken:String,
    forgotPassTokenExpiration:Date,
    verifyToken:String,
    verifyTokenExpiration:Date,
},
{
    timestamps:true
}
);

const User = mongoose.models?.User || mongoose.model<UserDocument>("User", UserSchema);
// module.exports = mongoose.models?.user || model<UserDocument>("user", UserSchema);
export default User;