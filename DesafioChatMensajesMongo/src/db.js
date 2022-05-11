import {connect} from "mongoose";
import { MONGODB_URI } from "./config";
export const conexionDB = async () => {
    try {
        await connect(MONGODB_URI);
        console.log("Se conecto a la BD")
    } catch (error) {
        console.log(error)
    }
}
