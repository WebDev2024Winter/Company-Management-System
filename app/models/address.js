import mongoose, { Schema, model } from 'mongoose';

const AddressSchema = new Schema ({
        name: {
            type: String,
            required: true,
        },
        houseNumber: {
            type: Number,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
},
    { timestamps: true }
);

const Addresses = model("Addresses") || mongoose.model("Addresses", AddressSchema);


export default Addresses;
