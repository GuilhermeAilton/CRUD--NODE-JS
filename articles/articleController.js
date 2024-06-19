const express = require("express");
const router = express.Router();
const Category = require('../categories/categories')
const Article = require('./article')

router.get('/admin/articles', (req,res) => {
    Article.findAll({
        include:[{ model : Category}] // incluindo na minha busca o model categoria
    }).then(articles => {
        res.render('admin/articles/index', {articles:articles })
    })
   
})


router.get('/admin/articles/new', (req,res) => {
        Category.findAll({}).then(categories => {
            res.render('./admin/articles/new', {categories: categories})
        })




})


router.post('/articles/save', (req,res) => {
    let title = req.body.title
    let body = req.body.body
    let id = req.body.category
    Article.create({
        title : title,
        slug: title.split(" ").join("-"),
        body: body,
        categoryId : id

    }).then(() => {
        res.redirect('/admin/articles')

    })  
})

module.exports= router;