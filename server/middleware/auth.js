import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();
const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);
      if (decodedData) {
        req.userId = decodedData.id;
      }
      
    } else {
      decodedData = jwt.decode(token);

      if (decodedData) {
        req.userId = decodedData.sub;
      }
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
