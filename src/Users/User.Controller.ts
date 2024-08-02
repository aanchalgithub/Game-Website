import { Body, Controller, Delete, Patch, Post } from "@nestjs/common";
import { UserService } from "./User.Service";
import { CreateUserDto, LoginUserDto } from "./dto/User.dto";
import { ApiOperation } from "@nestjs/swagger";

@Controller('/users')
export class UserController{
    constructor(private userService: UserService,

    ){}

//--------------------------------USER SIGN UP CONTROLLER-------------------------------------  
@ApiOperation({summary : "User Sign Up Api"})    
@Post('/signUp')
    async SignUp(@Body() body : CreateUserDto){
        return this.userService.SignUpS(body)
    }

//-------------------------------USER LOGIN CONTROLLER---------------------------------------
    @ApiOperation({summary : "User Login Api"})    
    @Post('/login')
    async loginUser(@Body() body : LoginUserDto){
        return this.userService.LoginS(body)
    }

//-------------------------------UPDATE USER CONTROLLER---------------------------------------
    @ApiOperation({summary : "User Update APi"})
    @Patch('/update/:id')
    async updateUser(){
        return this.userService.UpdateUserS()
    }

//-------------------------------DELETE USER CONTROLLER---------------------------------------
    @ApiOperation({summary : "User Delete Api"})
    @Delete('delete/:id')
    async deleteUser(){
        return this.userService.DeleteUserS()
    }
}