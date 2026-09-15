import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config.js";

export const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "Please login first",
        });
    }
    const  token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
};