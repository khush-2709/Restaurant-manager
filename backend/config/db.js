import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://khush0704:V0qYSdvRMhrDMNbx@cluster0.38rr8nu.mongodb.net/Res-Manager').then(() => console.log("DB Connected"));
}

