import mongoose from "mongoose";


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"]

    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"]
    },
    images:[
        {
            public_id:{
                type:String,

            },
            Url:{
                type:String
            },
        },

    ],


    category:{
        type:String,
        required:[true,"Please enter product category"]
    }
});