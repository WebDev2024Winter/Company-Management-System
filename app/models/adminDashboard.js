import mongoose, { Schema, model } from 'mongoose';

const AdminDashboardSchema = new Schema ({
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
},
    { timestamps: true }
);

const AdminDashboard = model("AdminDashboard") || mongoose.model("AdminDashboard", AdminDashboardSchema);


export default AdminDashboard;