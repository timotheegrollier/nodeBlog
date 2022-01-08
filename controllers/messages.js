const Message = require('../models/Messages')

exports.add = (req, res, next) => {
    const message = new Message({
        message: req.body.message
    })
    message.save()
        .then((message) => res.status(200).json({ message: message }))
        .catch(error => res.status(400).json(error))
}


exports.list = (req, res, next) => {
    Message.find()
        .then(message => res.status(200).json({ message }))
        .catch(error => res.status(400).json(error))
}


exports.deleteAll = (req, res, next) => {
    Message.deleteMany()
        .then(()=>res.status(200).json({message:"Tout les messages supprimé"}))
        .catch(error => res.status(400).json(error))
}