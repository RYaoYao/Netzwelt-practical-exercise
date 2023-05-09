import axios from "axios"
export const SignIn = async (req,res,next) => {
    try{
        console.log(req.body.username)
       const user =  await axios.post("https://netzwelt-devtest.azurewebsites.net/Account/SignIn",{
        username:req.body.username,
        password:req.body.password
    })
    res.status(200).send(user.data)       
    }catch(err){
        next(err)
    }
}