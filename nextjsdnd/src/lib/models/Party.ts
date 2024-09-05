import mongoose, { model, ObjectId, Schema } from "mongoose";

export interface PartyDocument{
    _id:string,
    members: [ObjectId],
    user_id:ObjectId
}

const PartySchema = new Schema<PartyDocument>({
    members:{
        type:[],
        of: Schema.Types.ObjectId
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},
{
    timestamps:true
})

const Party = mongoose.models?.Party || model<PartyDocument>("Party", PartySchema);
export default Party;