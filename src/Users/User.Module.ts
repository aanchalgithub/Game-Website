import {  Module } from "@nestjs/common";
import { UserController } from "./User.Controller";
import { UserService } from "./User.Service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "./Schema/User.Schema";

@Module({
 imports : [
    MongooseModule.forFeature([{
        name : User.name,
        schema : userSchema
    }])
 ],
 controllers : [UserController],
 providers : [UserService]
})

export class UserModule{

}