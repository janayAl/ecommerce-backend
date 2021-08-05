// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category, {

  through: {
    model:Product,//double check this logic..product containes category name
    unique:false //double check//
  },
  //Defome an alias for when data is retrieved
as: 'product_category'
});

// Categories have many Products

Category.hasMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Product,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'Category_ManyProduct'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'Product_Tag'
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'Tag_ManyProduct'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};