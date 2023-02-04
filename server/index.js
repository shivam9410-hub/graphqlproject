const express= require('express') ; 
const port = process.env.PORT || 5000 ; 
const cors =require('cors') ;
const schema= require('./schema/schema')
const {graphqlHTTP}= require('express-graphql')
const connectDB=require('./config/db')
const app = express() ;
connectDB();
app.use(cors()) ;
app.use('/graphql',graphqlHTTP({
schema,
graphiql:true

}))
app.listen(port, console.log("Server is running at port 5000")) ;

