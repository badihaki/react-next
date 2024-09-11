import mongoose, { ObjectId, Schema } from "mongoose";
import User from "./User";

export interface CharacterDocument{
    _id:string,
    name:string,
    charClass:string,
    level:number,
    notes:string,
    user_id:ObjectId
}

const CharacterSchema = new mongoose.Schema<CharacterDocument>({
    name:{
        type:String,
        required: [true, "Character needs a name"]
    },
    level:{
        type:Number
    },
    charClass:{
        type:String
    },
    notes:{
        type:String
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: User
    }
},
{
    timestamps:true
});

const Character = mongoose.models?.Character || mongoose.model<CharacterDocument>("Character", CharacterSchema);
export default Character;