import * as crypto from 'crypto'

export default async function GenerateOtp(){
    const otpNumber = await crypto.randomInt(100000,999999)
    return otpNumber;
}