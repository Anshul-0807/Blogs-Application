import User from "../model/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signupUser = async (request, response) => {
   try {
      // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = {username: request.body.username, name: request.body.name, password: hashedPassword};
    
    const newUser = new User(user);

   await newUser.save();

   return response.status(200).json({msg: "signup successfull"})

   } catch (error) {
    return response.status(500).json({msg: "Error while signup the user"})
   }
}

export const loginUser = async(request, response) => {
   let user = await User.findOne({username: request.body.username});
   if(!user){
      return response.status(400).json({ msg: "Username does not match"})
   }
   try {
     let match = await bcrypt.compare(request.body.parser, user.password);
     if(match){
          const accessToken = jwt.sign(user.ToJSON(), )

          const refreshToken = 

     } else{
      return  response.status(400).json({msg: 'password does not match'});
     }
   } catch (error) {
      
   }
}