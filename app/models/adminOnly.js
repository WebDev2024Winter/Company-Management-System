import mongoose, { Schema, model } from 'mongoose';

const AdminOnlySchema = new Schema ({
        name: {
            type: String,
            required: true,
        },
        wage: {
            type: Number,
            required: true,
        },
        overtimeRaise: {
            type: Number,
            required: true,
        },
        hours: {
            type: Number,
            required: true,
        },
        jobTitle: {
            type: String,
            required: true,
        },
},
    { timestamps: true }
);

const AdminOnly = mongoose.models["AdminOnly"] ? mongoose.model("AdminOnly") : mongoose.model("AdminOnly", AdminOnlySchema);


export default AdminOnly;
