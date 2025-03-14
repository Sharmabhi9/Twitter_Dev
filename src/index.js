const express=require('express');
const connect = require('./config/database');
const app=express();

const HashTagrepo=require('./repository/HashtagRepository');
app.listen(3000 ,async  () =>{
    console.log('Server started ');
    await connect();
    console.log('MongoDb connected');

    let repo =new HashTagrepo();
    //bulkcreating
    await repo.bulkcreate([
        {
            title:'Trend',
            tweets:[]
        },
        {
            title:'Fun',
            tweets:[]
        },
        {
            title:'java',
            tweets:[]
        },
        {
            title:'fine',
            tweets:[]
        },
        
    ]);


});

