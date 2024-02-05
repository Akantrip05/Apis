const model= require("../models/product")


const getAllProductTesting = async(req,res) =>{ 

    const {name,feature} = req.query;
    const queryObj = {}
    
    if (name) 
    queryObj.name= {$rezex:name,$Options:"a"};
    let apiData = model.find(queryObj);
    if (sort) {
        let sortfix = sort.replace(","," ");
        apiData = apiData.sort(sortfix);
    }
    if (feature) 
    queryObj.feature = feature; 

    const myData = await apiData;
    res.status(200).json({myData});

}
const getAllProduct = async(req,res) =>{
    const myData = await model.find(req.query);
    res.status(200).json({myData});

}
module.exports = {getAllProduct,getAllProductTesting};