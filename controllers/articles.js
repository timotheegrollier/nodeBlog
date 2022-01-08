const Article = require('../models/Article')

exports.add = (req,res,next)=>{
const article = new Article({
    ...req.body
})
article.save()
        .then((article) => res.status(200).json({ article: article }))
        .catch(error => res.status(400).json(error))
}


exports.list = (req,res,next)=>{
    Article.find()
    .then(articles=>res.status(200).json({articles}))
    .catch(error=>res.status(400).json({error}))
}