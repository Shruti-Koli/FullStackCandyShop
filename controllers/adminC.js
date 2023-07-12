const Candy = require('../models/candy');

exports.getCandy = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const candy = await Candy.findByPk(req.params.id);
        res.status(200).json({candy: candy})
    }catch(err){
        console.log('Get user is failing',JSON.stringify(error));
        res.status(500).json({error:err})
    }
}

exports.getCandies = async (req,res,next)=>{
    try{
        const candies = await Candy.findAll();
        res.status(200).json({allCandies: candies})
    }catch(err){
        console.log('Get user is failing',JSON.stringify(error));
        res.status(500).json({error:err})
    }
}

exports.addCandy = async (req,res,next)=>{
    try{
        if(!req.body.name || !req.body.description || !req.body.price || !req.body.quantity){
            throw new Error('All fields are Mandatory')
        }
        console.log(req.body)
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;

        const data = await Candy.create({
            name: name,
            description: description,
            price : price,
            quantity : quantity
        })
        res.status(201).json({candyDetails: data})
    }catch(err){
        res.status(500).json({error:err})
    }
}

exports.buyCandy = async(req, res, next)=>{
    try{
        const id = req.params.id;
        //console.log(id);
        //const id = req.query.id;
        const number = req.query.number;
        const item = await Candy.findByPk(req.params.id);
        
        const availableQuantity = item.quantity;
        console.log(availableQuantity)
        if(availableQuantity>number){
            const newQuantity = availableQuantity-number;
            await Candy.update(
                {quantity: newQuantity},
                {where:{id:id}}
              )
            return res.status(200).json({quantity: newQuantity})
        }
        
        else if(availableQuantity==number){
            await Candy.destroy({where:{id:id}})
            return res.status(200).json({quantity: 0})
        }
        else if(availableQuantity<number){
            throw new Error('Not Enough Candies')
        }
    }
    catch(err){
        res.status(500).json({error:err})
    }
}
