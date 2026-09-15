import mongoose from "mongoose";
import {DB_URI} from "../../config.js"

export const bootstrap = async(app, port) => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`db connected`)
        app.listen(port, () => {
            console.log(`server is running on port ${port}`);
        })
    } catch (err) {
        console.log("failed to connect db")
    }
}