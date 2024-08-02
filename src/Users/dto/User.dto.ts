import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

//-----------------------------------SIGN UP DTO------------------------------------------------
export class CreateUserDto{
    
    @MinLength(3,{message : "Minimum length must be greater than 3"})
    @IsString({message : "User Name must be in string"})
    @IsNotEmpty({message : "User Name should not be empty"})
    username : string;


    @IsEmail()
    @IsNotEmpty({message:"Email must required"})
    email : string;

    @MaxLength(50,{message : "Maximum Length must be less than 50"})
    @MinLength(3,{message : "Minimum length must be greater than 3"})
    @IsString({message : "Full Name must be in String"})
    @IsNotEmpty({message : "Full Name should not be empty"})
    fullname: string;

    @IsNotEmpty({message : "Country must required"})
    country: string;

    @IsOptional()
    city : string;

    @IsOptional()
    state : string;

    @IsString()
    @MinLength(4,{message : "Minimum Length should be greater than 4"})
    @MaxLength(20, {message : "Maximum length should be less than 20"})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password : string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    confirm_password : string;

    @IsNotEmpty({message :"Terms and conditions Required"})
    terms_and_condition : boolean;
}

//-----------------------------------LOGIN DTO------------------------------------------------
export class LoginUserDto{

    @IsEmail()
    @IsNotEmpty({message : "Email must required"})
    email : string;

    @IsString()
    @MinLength(4,{message : "Minimum Length should be greater than 4"})
    @MaxLength(20, {message : "Maximum length should be less than 20"})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password : string;
}