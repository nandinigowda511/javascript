import mongoose from "mongoose"

const orderitemSchema  = new mongoose.Schema (
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity: {
            type: Number,
            required: true
        }
    })

const orderSchema = new mongoose.Schema(
    {
        orderprice: {
            type:Number,
            required: true
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        orderitem : {
            type: [orderitemSchema],
            required: true,
        },
        address: {
            type: String,
            required: true,//  [orderitemSchema], same can be defined for address as place pincode,state,city,area,landmark etc 
        },
        status:{
            type:String,
            enum:["PENDING","CANCELLED","DELIVERED"],
            default:"PENDING"
        },
    }, {timestamps: true}
)

export const Order = mongoose.model("Order",orderSchema)