const express = require("express");
const router = express.Router();
const Category = require("./categories");
const { raw } = require("body-parser");
const { where } = require("sequelize");


router.get('/admin/categories/new', (req,res) => {
    res.render('admin/categories/new')
   
})

router.post('/categories/save', (req,res) => {
    var title = req.body.title;

    if(title!= undefined){
        Category.create({
            title: title,
            slug: title.split(" ").join("-")
        }).then(()=> {
            res.redirect("/admin/categories")
        })


    }else{
        res.redirect("/admin/categories/new")
    }

})
router.get('/admin/categories', (req,res) => {
    Category.findAll({}).then(categories =>{
        res.render('admin/categories/index', {categories: categories})
        console.log(categories)
    })
   

    
 

})


router.post('/categories/delete', (req, res) => {
    let id = req.body.id;

    // Verifica se o ID está definido e é um número
    if (id !== undefined && !isNaN(id)) {
        //apagar um item pelo
        Category.destroy({
            where: { id: id }
        }).then(() => {
            res.redirect("/admin/categories");
        }).catch(err => {
            console.error(err);
            res.status(500).send("Erro interno do servidor");
        });
    } else {
        // Redireciona de volta se o ID for inválido ou não definido
        res.redirect('/admin/categories');
    }
});


router.get('/admin/categories/edit/:id', (req, res) => {
    let id = req.params.id;

    // Verifica se o ID está definido e é um número
    if (id !== undefined && !isNaN(id)) {
        // Busca a categoria pelo ID
        Category.findOne({
            where: { id: id }
        }).then((category) => {
            if (category) {
                res.render('admin/categories/edit', { category: category });  // Renderiza a página de edição com a categoria encontrada
            } else {
                res.redirect('/admin/categories');  // Redireciona se a categoria não for encontrada
            }
        }).catch(err => {
            console.error(err);
            res.status(500).send("Erro interno do servidor");  // Envia uma mensagem de erro interno do servidor em caso de falha
        });
    } else {
        // Redireciona de volta se o ID for inválido ou não definido
        res.redirect('/admin/categories');
    }
});

//RoTA PARA EDIÇÃO 
router.post('/admin/categories/update', (req, res) => {
    let id = req.body.id;
    let title = req.body.title;

    // Verifica se o ID está definido e é um número, e se o título está presente
    if (id !== undefined && !isNaN(id) && title) {
        // Atualiza a categoria
        Category.update({ title: title , slug:title.split(" ").join("-") }, {
            where: { id: id }
        }).then(() => {
            res.redirect('/admin/categories');  // Redireciona após a atualização
        })
    } else {
        res.redirect('/admin/categories');  // Redireciona se os dados não forem válidos
    }
});
module.exports= router;