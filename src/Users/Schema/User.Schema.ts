import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>
@Schema({timestamps:true})
export class User{
    
    @Prop({required : true})
    username : string;

    @Prop({required: true})
    email : string;

    @Prop({required : true})
    fullname : string;

    @Prop({required : true})
    country : string;

    @Prop()
    city : string;

    @Prop()
    state : string;

    @Prop({required : true})
    password : string;

    @Prop({required : true})
    confirm_password : string;

    @Prop({required : true})
    terms_and_condition : boolean;
}

export const userSchema = SchemaFactory.createForClass(User)