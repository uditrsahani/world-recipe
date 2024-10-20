import mongoose from "mongoose";

const connectDB = async () =>{
  try{
    await mongoose.connect('mongodb+srv://uditrsahani:X5btwzO8FH6MnHST@cluster0.lmco5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    console.log('Database Connected')
  }

  catch(err){
    console.log('Error connecting database'+ err);
  }
}

export default connectDB;