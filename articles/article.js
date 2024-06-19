const  Sequelize  = require('sequelize');

const connection = require('../database/database');
const Category = require('../categories/categories')


const Article = connection.define('articles',{
    title:{
        type : Sequelize.STRING,
        allowNull : false

    },slug:{
        type :Sequelize.STRING,
        allowNull: false
    },body:{
        type: Sequelize.TEXT,
        allowNull: false

    }

})
// UMA CATEGORIA TEM MUITOS ARTIGOS
Category.hasMany(Article)
// UM ARTIGO PARA MUITOS
Article.belongsTo(Category)


module.exports = Article;