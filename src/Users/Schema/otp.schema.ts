import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./User.Schema";

@Schema({timestamps : true})
export class Otp{
    @Prop({required : true})
    otp : number;

    @Prop({type : mongoose.Types.ObjectId, ref : User.name})
    userId : User;

    @Prop({default : Date.now() + 60000})
    expiredAt : number;
}

export const otpSchema = SchemaFactory.createForClass(Otp) 