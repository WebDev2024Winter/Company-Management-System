import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema ({
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: false,
        },
        admin: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    { timestamps: true }
);

const Users = model("Users") || mongoose.model("Users", UserSchema);

export default Users;
