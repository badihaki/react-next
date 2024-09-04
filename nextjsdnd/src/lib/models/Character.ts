import mongoose, { model, ObjectId, Schema } from "mongoose";

export interface CharacterDocument{
    _id:string,
    name:string,
    charClass:string,
    level:number,
    notes:string,
    user_id:ObjectId
}

const CharacterSchema = new Schema<CharacterDocument>({
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
    user_id:Schema.Types.ObjectId
},
{
    timestamps:true
});

const Character = mongoose.models?.Character || model<CharacterDocument>("Character", CharacterSchema);
export default Character;