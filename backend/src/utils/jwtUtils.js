import jwt from 'jsonwebtoken';
import { secreatkey } from '../configuration/jwtConfig.js';

const generateToken=(user)=>{
  const payload ={
    id:user._id,
    email:user.email,
    role:user.role,
  }
  return jwt.sign(payload,secreatkey,{expiresIn : "1h"});
}

const generateRefreshToken=(user)=>{
  const payload ={
    id:user._id,
    email:user.email,
    role:user.role,
  }
  return jwt.sign(payload,secreatkey,{expiresIn : "7h"});
}

const verifyToken=(token)=>{
  jwt.verify(token,secreatkey)
}

export{generateToken,generateRefreshToken,verifyToken}
