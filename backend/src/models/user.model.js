import { model, Schema } from "mongoose";

export const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        employee: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        admin: {type: Boolean, default: false},
        isCalling: {type: Boolean, default: false}
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },

        toObject: {
            virtuals: true,
        },
    }
);

export const UserModel = model('user', UserSchema);
