import arcjet, {tokenBucket, shield,detectBot} from 'arcjet';

import "dotenv/config";

// Configure Arcjet middleware

export const aj = arcjet(
    {
        key:process.env.ARCJET_KEY,
       characteristics:["ip.src"],
       rules:[
        //shield protects your app from common attacks eg.SQL injection,XSS,CSRF attacks
         shield({mode:"LIVE"}),
         detectBot({
            mode:"LIVE",
            //block all the parts except search engines
            allow:[
                "CATEGORY:SEARCH_ENGINE",
                //SEE THE FULL LIST OF CATEGORIES HERE: https://docs.arcjet.com/bot-detection/categories
            ]
         }),
         //rate limiting
         tokenBucket({
            mode:"LIVE",
            refillRate: 5,
            interval: 60,
            capacity: 10,
            //you can customize the response when rate limit is exceeded
         })
       ]
    }
);