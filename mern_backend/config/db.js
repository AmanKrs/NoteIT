const mongoose = require('mongoose')

const connectDB = async () => {
  try{
    console.log(`MongoDB`);
    const url = process.env.MONGO_URI;
    console.log(url);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      
    });
    console.log(`MongoDB Connected: ${conn}`);

  }
  catch(error){
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;