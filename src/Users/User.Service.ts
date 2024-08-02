import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./Schema/User.Schema";
import { Model } from "mongoose";
import { CreateUserDto, LoginUserDto } from "./dto/User.dto";

@Injectable()
export class UserService{
   constructor(
    @InjectModel(User.name) private userModel: Model<User>
   ){}

//------------------------------------------USER SIGN UP SERVICE------------------------------------
   async SignUpS(body : CreateUserDto){
      const userData = await this.userModel.create(body)
      if(!userData){
         throw new NotFoundException("User Not Found")
      }
      return{
         success : true,
         message : "Successfully Signed Up",
         data : userData
      }
   }

//------------------------------------------USER LOGIN SRVICE-------------------------------------
   async LoginS(body : LoginUserDto){
      const loginData = await this.userModel.findOne({
         $or : [{email : body.email},{password : body.password}]
      })
      if(!loginData){
         throw new NotFoundException("User Not Found")
      }
      return{
         success : true,
         message : "Login Successfully",
         data : loginData
      }
   }

//-----------------------------------UPDATE USER---------------------------------------------
async UpdateUserS(){

}



//-----------------------------------DELETE USER---------------------------------------------
async DeleteUserS(){

}
}