const {Companies} = require('../models')

class companiesController{
    static async show(req,res){
        try{
            let comp = await Companies.findAll({
                order:[['id','ASC']]
            })
            res.status(200).json(comp)
        }catch(err){
            res.status(500).json(err)
        }
    }
    
    static async showByMember(req,res){
        try{
            const page = 0
            const pageNum = Number.parseInt(req.query.page);
            if(Number.isNaN(pageNum)&& pageNum>0){
                page = pageNum
            }
            const size =5;
            let comp = await Companies.findAndCountAll({
                limit:size,
                offset: size*page,
                order:[['membership_type','DESC']]
            })
            res.status(200).json({
                content: comp.rows,
                totalPages:Math.ceil(comp.count/size)
            })
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async showByUpdate(req,res){
        try{
            const page = 0
            const pageNum = Number.parseInt(req.query.page);
            if(Number.isNaN(pageNum)&& pageNum>0){
                page = pageNum
            }
            const size =5;
            let comp = await Companies.findAndCountAll({
                limit:size,
                offset: size*page,
                order:[['updated_at','DESC']]
            })
            res.status(200).json({
                content: comp.rows,
                totalPages:Math.ceil(comp.count/size)
            })
        }catch(err){
            res.status(500).json(err)
        }
    }
    
    static async add(req,res){
        try{
            let updated_at = Date.now();
            const {name,membership_type,status} = req.body

            let comp = await Companies.create({
                name,membership_type,status,updated_at
            })
            res.status(201).json(comp)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async update(req,res){
        try{
            let id = +req.params.id
            let updated_at = Date.now();
            const {name,membership_type,status} = req.body

            let comp = await Companies.update({
                name,membership_type,status,updated_at
            },{where:{id}})
            comp[0] === 1 ? res.status(200).json({
                message:`id ${id} has been update`
            }):
            res.status(404).json({
                message:"id is not found!"})

        }catch(err){
            res.status(500).json(err)
        }
    }

    static async delete(req,res){
        try{
            let id = req.params.id
            let comp = await Companies.destroy({where:{id}})
            comp === 1 ? res.status(200).json({
                message:`id ${id} has been delete`
            }):
            res.status(404).json({
                message:"id is not found!"})
            
        }catch(err){
            res.status(500).json(err)
        }
    }

}

module.exports = companiesController