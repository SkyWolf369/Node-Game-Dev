import {Schema, model} from "mongoose";
// so in mongoose u make schemas so u can save the data in a format

const vpsSchema = new Schema({
    distro: {
        type: String,
        required: true
    }
})

export default model("vpSchema", vpsSchema)