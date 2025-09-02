import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["admin" , "employee"], required:true},
    profileImage: {type:String},
    createAt: {type: Date, default: Date.now},
    updatedAt: {type:Date, default: Date.now},

})

const User = mongoose.model("User" , userSchema)
export default User


/*

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            default: "user"
        },
        isBlock: {
            type: Boolean,
            default: false
        },
        isEmailVarified: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: "https://www.gravatar.com/avatar/"
        }
    }
)

const User = mongoose.model("User", userSchema)
export default User

*/ 