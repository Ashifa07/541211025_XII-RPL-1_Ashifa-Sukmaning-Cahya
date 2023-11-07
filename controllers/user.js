const User = require('../models/User')

module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find()
            if(users.length > 0){
            }else{
               res.json({
                status: false,
                message: "Data masih kosong"
               }) 
            }
            
        }catch (error) {
            res.status(400).json({sucess: false})
        }

       
     },
     store: async (req, res) => {
        try{
            const user = await User.create(req.body)
            res.sttus(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error){
            res.status(400).json({sucess: false})
        }
     },   
      update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
            return user
            }     
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil diubah"
        })
      },
      delete: (req, res) => {
        const id = req.params.id
        user = users.filter(user => user.id != id)
      
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapus"
        })
    }
    
}

