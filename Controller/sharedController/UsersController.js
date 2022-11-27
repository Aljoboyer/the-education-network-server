const UserModal = require("../../Models/sharedModels/user.js");

exports.create = async (req, res) => {
    const data = new UserModal(req.body) 
    try {
       const saving = await data.save() 
       res.json(saving)
    } catch (error) { 
        console.log('error -->', error)
    }
}
