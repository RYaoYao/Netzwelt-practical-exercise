import axios from "axios"
import  jwt from "jsonwebtoken"
export const SignIn = async (req,res,next) => {
    try{
       
       const response =  await axios.post("https://netzwelt-devtest.azurewebsites.net/Account/SignIn",{
        username:req.body.username,
        password:req.body.password
    })
    const data = response.data
    const token = jwt.sign({name:data.displayName, role:data.roles[0]}, process.env.secret);
    const {password, ...others} = data
   
    res.cookie("access_token",token,{httpOnly:true, secure: true, maxAge: 24 * 60 * 60 * 1000 }).status(200).send({...others, token})       
    }catch(err){
        next(err)
    }
}