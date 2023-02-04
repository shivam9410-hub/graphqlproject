const mongoose = require('mongoose') ; 
const graphql=require('graphql') ;
const connectDB= async ()=>{
    const conn= await mongoose.connect("mongodb+srv://khantwal:12345@sandbox.vevuw.mongodb.net/graphql?retryWrites=true&w=majority") ;
    console.log(`MongoDB connected:${conn.connection.host}`) ;
}
console.log("shivam") ;
module.exports=connectDB;

