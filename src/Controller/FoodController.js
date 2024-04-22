
const FoodModel=require("../Model/FoodModel")

exports.createFood=async (req,res)=>{

    try {
        let readBody=req.body;
        await FoodModel.create(readBody)
        return res.status(200).json({status:"success",message: "Request Success",data:readBody});
    }
    catch (e) {
        return res.status(400).json({status:"Fail"});
    }

}

exports.readFood=async (req, res) => {
    try {

        const result = await FoodModel.find()
        return res.status(200).json({status: "success", message: "Request Success", data: result});
    } catch (e) {
        return res.status(400).json({status: "Fail",massage:e});
    }
}

exports.readByIdFood=async (req,res)=>{

    try {
        let {id}=req.params

        const result =await FoodModel.findOne({_id:id})
        return res.status(200).json({status:"success",data: result});
    }

    catch (e) {
        return res.status(400).json({status: "Fail",massage:e});
    }

}

exports.updateFood=async (req,res)=>{


    try {
        let {id}=req.params
        let readBody=req.body;
        await FoodModel.updateOne({_id:id},readBody)

        return res.status(200).json({status:"success",id: id, data:readBody});
    }
    catch (e) {
        return res.status(400).json({status: "Fail",massage:e});
    }

}

exports.deleteFood=async (req,res)=>{

    try {
        let {id}=req.params
        await FoodModel.deleteOne({_id:id})

        return res.status(200).json({status:"Delete success" });
    }
    catch (e) {
        return res.status(400).json({status: "Fail",massage:e});
    }
}