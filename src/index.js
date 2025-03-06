const express=require('express');
const connect = require('./config/database');
const app=express();

const TweetRepository=require('./repository/tweet-repository');
const Comment =require('./models/comment');
const Tweet=require('./models/tweet');
app.listen(3000 ,async  () =>{
    console.log('Server started ');
    await connect();
    console.log('MongoDb connected');

    // const tweet= await Tweet.create({
    //     content:'Second Tweet ',
    // })
    // const tweets = await Tweet.findById('67c73eac56f370856876bdf8');
    // tweets.userEmail='b@c.com'
    // await tweets.save();
    const tweetRepo=new TweetRepository();
    // const tweet=await tweetRepo.create({content:'Tweet with comment Schema'});
    // console.log(tweet);
    // const comment =await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    //  await tweet.save();
    // const tweet =await tweetRepo.getAll(2,2);
    // tweet[1].userEmail='c&d.com';
    // await tweet[1].save();
    // console.log(tweet[1].contentWithEmail);    
    const tweet = await tweetRepo.create({content:'With Hooks Now '});// This is kind of hooks example 
    console.log(tweet);
});

