const mongoose=require("mongoose")

const schema=mongoose.Schema(
    {
      foodName:{type:String,required:true},
      foodCode:{type:String,required:true},
      foodImg:{type:String,required:true},
      foodCategory:{type:String,required:true},
      foodQty:{type:String,required:true},
      foodPrice:{type:String,required:true}

    },{timestamps:true,versionKey:false}
)

const ProductModel=mongoose.model("foods",schema)

module.exports=ProductModel;