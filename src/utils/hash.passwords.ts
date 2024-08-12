import * as bcrypt  from 'bcrypt'

export async function hashPasswords(password : string){
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}