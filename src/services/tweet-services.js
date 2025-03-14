const { TweetRepository } =require('../repository/index');

class TweetService {
    constructor (){
        this.TweetRepository=new TweetRepository;

        }
        async  create(data){
            const content=data.content;
            const tags=content.match(/#[a-z0-9_]+/g);
            tags=tags.map((tag)=>tag.substring(1));
            console.log(tags);
            const tweet=await TweetRepository.create(data);
            /* todo create hashtags and add here
            1)bulk create hashtags
            2)filter title of hashtag based on multiple tags
            3)how to add tweet
            
            
            
            */
            return tweet;


        }

    }
    module.exports=TweetService;