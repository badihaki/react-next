import mongoose, { Schema, model } from "mongoose";
import ICharacter from "../interfaces/ICharacter";
import IParty from "../interfaces/IParty";

export interface UserDocument{
    _id:string,
    email:string,
    password:string,
    username:string,
    characters:{
        activeParty:IParty,
        reserveCharacters:[ICharacter]
    },
    isVerified:boolean,
    isAdmin: boolean,
    forgotPassToken:string,
    forgotPassTokenExpiration:Date,
    verifyToken:string,
    verifyTokenExpiration:Date
    createdAt: Date,
    updatedAt: Date,
}

const UserSchema = new Schema<UserDocument>({
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
        activeParty:{
            type:[],
            of:{name:String, class:String}
        },
        reserveCharacters:{
            type:[],
            of:{name:String, class:String}
        }
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

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
export default User;