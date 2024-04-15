import mongoose, { Schema, model } from 'mongoose';

const UserMessagesSchema = new Schema ({
        name: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        toUser: {
            type: String,
            required: true,
        },
},
    { timestamps: true }
);

const UserMessages = model.UserMessages || mongoose.model("UserMessages", UserMessagesSchema);


export default UserMessages;