const Hashtags=require('../models/hashtag');

class HashtagRepository {
    async create (data){
            try {
                const tag=await Hashtags.create(data);
                return tag;
            } catch (error) {
                console.log(error);
            }
    }
    async get (id){
        try {
            const tag=await Hashtags.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkcreate(data){
        try{
            const tags=await Hashtags.insertMany(data);
           
        }
        catch(error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const response=await Hashtags.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }

    } 
}
module.exports=HashtagRepository;