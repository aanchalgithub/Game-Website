import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./Schema/User.Schema";
import mongoose, { Model } from "mongoose";
import { CreateUserDto, LoginUserDto } from "./dto/User.dto";
import { hashPasswords } from "src/utils/hash.passwords";
import GenerateOtp from "src/utils/generate.otp";
import { Otp } from "./Schema/otp.schema";

@Injectable()
export class UserService{
   constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Otp.name) private otpModel : Model<Otp>,
   //  private readonly emailService : SendMailOtpService
   ){}

//-------------------------------------FUNCTION FOR SENDING OTP---------------------------------

async otpSend(id : mongoose.Types.ObjectId, email : string, subject : string){
   const otp = await GenerateOtp()
   await this.otpModel.deleteMany({userId : id})
   await this.otpModel.create({
      otp : otp,
      userId : id,
      expiredAt : Date.now()+60000
   });
 const message = `Hello ${email}, Here is your OTP${otp}.`
}

//------------------------------------------USER SIGN UP SERVICE------------------------------------
   async SignUpS(body : CreateUserDto){
      const hashPass = await hashPasswords(body.password)
      body.password = hashPass
      body["email"] = body.email?.trim()
      body.username = body.username?.trim() 
      const userSignUpData = await this.userModel.create(body)
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